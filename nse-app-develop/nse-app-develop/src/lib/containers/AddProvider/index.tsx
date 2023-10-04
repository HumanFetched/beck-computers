import React, { useState } from 'react';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { LinkIcon } from '@heroicons/react/solid';
import { Button, Loader } from '../../components';
import {
  emailProvidersSelector,
  useAppDispatch,
  useAppSelector,
} from '../../state';
import RadioButtonGroup, {
  IRadioButtonGroupOption,
} from '../../components/Radio';
import { PROVIDER_SCHEMA_MAP } from '../../utils/constants';
import {
  ConnectionType,
  IEmailProvider,
  IProvider,
  IProviderFormSchemaObject,
} from '../../types';
import { nseApi } from '../../services';
import { toast } from 'react-toastify';
import DynamicFormElement from '../DynamicFormElement';

/* eslint-disable-next-line */
export interface IProviderAddCallback {
  connectionType: ConnectionType;
  provider: IProvider;
}

export interface IProviderUpdateCallback {
  connectionType: ConnectionType;
  provider: IProvider;
}
export interface AddProviderProps {
  emailProviderId?: string;
  loading?: boolean;
  providerId?: string;
  providerGroupId?: string;
  mode: 'ADD' | 'UPDATE';
  onProviderAdd?: (data: IProviderAddCallback) => void;
  onProviderUpdate?: (data: IProviderUpdateCallback) => void;
}

export const AddProvider: React.FC<AddProviderProps> = ({
  emailProviderId = '',
  loading = false,
  providerId = '',
  mode = 'ADD',
  providerGroupId = '',
  onProviderAdd = () => null,
  onProviderUpdate = () => null,
}) => {
  // hooks here
  const dispatch = useAppDispatch();
  const emailProvider = useAppSelector((state) =>
    emailProvidersSelector.selectById(state, emailProviderId),
  );
  const { group } = useAppSelector((state) => state.groupConfig);

  // local state here
  const [connectionType, setConnectionType] = useState<ConnectionType>('API');

  const providerDetailsFormikSchema = Yup.object().shape({
    configuration: Yup.object().shape({
      monthlyMailLimit: Yup.number()
        .typeError('Limit must be number')
        .min(1, 'Limit cannot be less than 1'),
      dailyMailLimit: Yup.number()
        .typeError('Limit must be number')
        .min(1, 'Limit cannot be less than 1')
        .test(
          'Check daily count less than montly count ',
          'Daily limit cannot be more than montly limit',
          (val, context) => {
            if (
              context.parent.monthlyMailLimit &&
              val &&
              context.parent.monthlyMailLimit < val
            )
              return false;
            return true;
          },
        ),
    }),
  });
  const getConnectionTypesOptions = (
    connectionSupport: ConnectionType[],
  ): IRadioButtonGroupOption[] => {
    return connectionSupport.map((item) => {
      return {
        label: item,
        value: item,
        ...(item === 'SMTP' && { disabled: true }),
      };
    });
  };

  const getProviderDetails = (
    providers: IProvider[],
    providerId: string | undefined,
  ) => {
    if (providers.length < 1 || !providerId) return undefined;
    return providers.find((prov) => prov._id === providerId);
  };

  const getApiKeyInitialValues = (
    apiSchema: IProviderFormSchemaObject[],
    providerDetails: Record<string, unknown> | null | undefined,
  ) => {
    if (!providerDetails) return {};
    let apiObject = {};
    apiSchema.map((item) => {
      apiObject = {
        ...apiObject,
        [item.key]: providerDetails[item.key] || '',
      };
    });
    return apiObject;
  };

  const mailLimitConfig = getProviderDetails(
    group.providers,
    providerId,
  )?.configuration;

  if (!emailProviderId) {
    return (
      <p className="text-center w-full text-primary font-semibold">
        Email provider is not valid or deleted! Delete the current record and
        try adding new record
      </p>
    );
  }

  return (
    <Loader loading={loading}>
      <div className="space-y-6">
        <h2 className="font-semibold text-lg">
          Configure{' '}
          {emailProvider?.displayName ||
            emailProvider?.name ||
            (
              getProviderDetails(group.providers, providerId)
                ?.provider as IEmailProvider
            )?.name}{' '}
          for your domain to send emails
        </h2>
        <div className="flex items-center justify-center">
          <Formik
            initialValues={{
              connectionType: connectionType,
              apiDetails: {
                ...getApiKeyInitialValues(
                  emailProvider?.apiSchema || [],
                  getProviderDetails(group.providers, providerId)?.apiDetails,
                ),
              },
              configuration: {
                dailyMailLimit: mailLimitConfig?.dailyMailLimit || 1,
                monthlyMailLimit: mailLimitConfig?.monthlyMailLimit || 1,
              },
            }}
            validationSchema={providerDetailsFormikSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              if (mode === 'ADD') {
                dispatch(
                  nseApi.endpoints.addProviderDetails.initiate({
                    provider: emailProviderId,
                    connectionType: values.connectionType,
                    providerGroupId,
                    apiDetails: {
                      ...values.apiDetails,
                    },
                    configuration: values.configuration,
                  }),
                )
                  .unwrap()
                  .then((res) => {
                    onProviderAdd({
                      connectionType: values.connectionType,
                      provider: res.result,
                    });
                  })
                  .catch((err) => {
                    toast(
                      err.data?.message ||
                        'Something went wrong. Please try again',
                      {
                        type: 'error',
                      },
                    );
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              } else {
                dispatch(
                  nseApi.endpoints.updateProviderDetails.initiate({
                    id: providerId,
                    body: {
                      connectionType: values.connectionType,
                      apiDetails: values.apiDetails,
                      configuration: values.configuration,
                    },
                  }),
                )
                  .unwrap()
                  .then((res) => {
                    toast('Provider details updated successfully', {
                      type: 'success',
                    });
                    onProviderUpdate({
                      connectionType: values.connectionType,
                      provider: res.result,
                    });
                  })
                  .catch((err) => {
                    toast(
                      err.data?.message ||
                        'Something went wrong. Please try again',
                      {
                        type: 'error',
                      },
                    );
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              }
            }}
          >
            {(formik) => {
              const { values, setFieldValue, isSubmitting } = formik;
              return (
                <Form>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
                      <p className="font-semibold"> Select connection type: </p>
                      <RadioButtonGroup
                        name="connectionType"
                        value={values.connectionType}
                        options={getConnectionTypesOptions(
                          emailProvider?.supports || [],
                        )}
                        onChange={(value) => {
                          setFieldValue('connectionType', value);
                          setConnectionType(value as ConnectionType);
                        }}
                      />
                    </div>
                    {emailProvider
                      ? emailProvider[
                          PROVIDER_SCHEMA_MAP[values.connectionType]
                        ]?.map(({ name, key, type, disabled }, index) => {
                          return (
                            <Field key={index} name={`apiDetails.${key}`}>
                              {({ field, meta }: FieldProps) => (
                                <DynamicFormElement
                                  name={name}
                                  type={type}
                                  elementKey={key}
                                  disabled={disabled}
                                  value={field.value}
                                  errorMessage={meta.touched ? meta.error : ''}
                                  onChange={({ marker, value }) => {
                                    setFieldValue(
                                      `apiDetails.${marker}`,
                                      value,
                                    );
                                  }}
                                />
                              )}
                            </Field>
                          );
                        })
                      : null}
                    {
                      <>
                        <Field name={'configuration.monthlyMailLimit'}>
                          {({ field, meta }: FieldProps) => (
                            <DynamicFormElement
                              name={'Number of mails in a month'}
                              type={'number'}
                              elementKey={'monthlyMailLimit'}
                              value={field.value}
                              errorMessage={meta.touched ? meta.error : ''}
                              onChange={({ marker, value }) => {
                                setFieldValue(`configuration.${marker}`, value);
                              }}
                            />
                          )}
                        </Field>
                        <Field name={'configuration.dailyMailLimit'}>
                          {({ field, meta }: FieldProps) => (
                            <DynamicFormElement
                              name={'Number of mails in a day'}
                              type={'number'}
                              elementKey={'dailyMailLimit'}
                              value={field.value}
                              errorMessage={meta.touched ? meta.error : ''}
                              onChange={({ marker, value }) => {
                                setFieldValue(`configuration.${marker}`, value);
                              }}
                            />
                          )}
                        </Field>
                      </>
                    }
                    <div>
                      <Button block loading={isSubmitting} htmlType="submit">
                        {mode === 'ADD' ? 'Submit' : 'Update'}
                      </Button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="space-x-2 cursor-pointer flex items-center text-sm text-secondary mt-3"
        >
          <LinkIcon className="h-4 w-4" />
          <p>Configuring SMTP provider for your domain</p>
        </a>
      </div>
    </Loader>
  );
};

export default AddProvider;
