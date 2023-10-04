import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Input,
  ISelectOption,
  Loader,
  Modal,
  PageHeader,
  Select,
} from '../../lib/components';
import { nseApi } from '../../lib/services';
import {
  emailProvidersActions,
  // domainSelector,
  emailProvidersSelector,
  providerGroupConfigActions,
  useAppDispatch,
  useAppSelector,
} from '../../lib/state';
import {
  IEmailProvider,
  IProvider,
  IUpdateProviderGroupRequest,
} from '../../lib/types';
import * as Yup from 'yup';
import { PlusIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import { AddProvider, IProviderAddCallback } from '../../lib/containers';
import { useParams } from 'react-router-dom';
import { SECONDARY_COLOR } from '../../lib/utils/constants';
import ProvidersDraggableTable from '../../lib/containers/ProvidersDraggableTable';

/* eslint-disable-next-line */
export interface ProviderGroupConfigProps {}

const providerGroupConfigSchema = Yup.object().shape({
  // domain: Yup.string().required('Domain required'), // fixme
  name: Yup.string().required('Group name is required'),
});

export const ProviderGroupConfig: React.FC<ProviderGroupConfigProps> = () => {
  // hooks here
  const dispatch = useAppDispatch();
  // const domains = useAppSelector((state) => domainSelector.selectAll(state));
  const emailProviders = useAppSelector((state) =>
    emailProvidersSelector.selectAll(state),
  );
  // const { isLoading: isDomainsLoading } = useAppSelector(
  //   (state) => state.domain,
  // );
  const { isLoading: isEmailProvidersLoading } = useAppSelector(
    (state) => state.emailProviders,
  );
  const {
    isLoading: providerGroupLoading,
    isProvidersLoading,
    group,
  } = useAppSelector((state) => state.groupConfig);
  const { id } = useParams() as {
    id: string;
  };

  // local state here
  const [addProviderModal, setAddProviderModal] = useState({
    id: '',
    isVisible: false,
  });

  const getAllProviders = () => {
    dispatch(
      nseApi.endpoints.listEmailProviders.initiate({
        page: 1,
        limit: 100,
      }),
    )
      .unwrap()
      .catch((err) => {
        toast(
          err.data?.message ||
            'Something went wrong while fetching email providers. Please try again',
          {
            type: 'error',
          },
        );
      });
  };

  // const getDominOptions = (domains: IDomain[]): ISelectOption[] => {
  //   return domains.map((item) => {
  //     return {
  //       label: item.domain || '',
  //       value: item._id,
  //     };
  //   });
  // };

  const getEmailProvidersOptions = (
    providers: IEmailProvider[],
  ): ISelectOption[] => {
    return providers.map((item) => {
      return {
        label: item.displayName || item.name || '',
        value: item._id,
      };
    });
  };

  const handleProviderAdd = ({ provider }: IProviderAddCallback) => {
    dispatch(
      nseApi.endpoints.addProviderInGroup.initiate({
        groupId: id,
        provider: provider._id,
      }),
    )
      .unwrap()
      .then(() => {
        toast('Provider details added successfully', {
          type: 'success',
        });
        setAddProviderModal({
          id: '',
          isVisible: false,
        });
      })
      .catch((err) => {
        toast(err.data?.message || 'Something went wrong. Please try again', {
          type: 'error',
        });
      });
  };

  const getProviderGroupDetails = (id: string) => {
    dispatch(
      nseApi.endpoints.getProviderGroup.initiate({
        id,
      }),
    )
      .unwrap()
      .catch(() => {
        toast('Something went wrong', {
          type: 'error',
        });
      });
  };

  const getProvidersId = (providers: IProvider[]) => {
    return providers.map((item) => {
      return item._id;
    });
  };

  const updateProviderGroup = (
    { id, body }: IUpdateProviderGroupRequest,
    loadingCallback: (status: boolean) => void,
  ) => {
    dispatch(
      nseApi.endpoints.updateProviderGroup.initiate({
        id,
        body,
      }),
    )
      .unwrap()
      .then(() => {
        toast('Latest data updated successfully!', {
          type: 'success',
        });
      })
      .catch((err) => {
        toast(err.data?.message || 'Something went wrong. Please try again', {
          type: 'error',
        });
      })
      .finally(() => {
        loadingCallback(false);
      });
  };

  useEffect(() => {
    getAllProviders();
    return () => {
      dispatch(providerGroupConfigActions.reset());
      dispatch(emailProvidersActions.reset());
    };
  }, []);

  useEffect(() => {
    getProviderGroupDetails(id);
  }, [id]);

  return (
    <div className="w-full" key={JSON.stringify(group)}>
      <Loader loading={providerGroupLoading} color={SECONDARY_COLOR}>
        <div className="space-y-8">
          <PageHeader
            title="SMTP Group Configuration"
            description="configure and view SMTP group and routing logic for each of your verified domains."
            isBackButton
          />
          <div className="w-full md:w-3/5">
            <Formik
              key={JSON.stringify(group.providers)}
              initialValues={{
                // domain: (group.domain as IDomain[])[0]?._id,
                name: group.name,
                provider: '',
                providerList: group.providers || [],
              }}
              validationSchema={providerGroupConfigSchema}
              onSubmit={(values, { setSubmitting }) => {
                const { name } = values;
                setSubmitting(true);
                if (group.providers.length < 1) {
                  toast('Add atleast one provider', {
                    type: 'warning',
                  });
                  setSubmitting(false);
                  return;
                }
                updateProviderGroup(
                  {
                    id,
                    body: {
                      name,
                      providers: getProvidersId(group.providers),
                      // domain: [domain],
                    },
                  },
                  (status) => setSubmitting(status),
                );
              }}
            >
              {(formik) => {
                const {
                  values,
                  errors,
                  handleChange,
                  setFieldValue,
                  isSubmitting,
                } = formik;
                return (
                  <Form>
                    <div className="space-y-4">
                      {/* <div className="space-y-2">
                        <Select
                          loading={isDomainsLoading}
                          marker="domain"
                          options={getDominOptions(domains)}
                          label="Select domain"
                          placeholder="Select domain"
                          value={values.domain}
                          onChange={(marker, { value }) => {
                            setFieldValue(marker, value);
                          }}
                        />
                      </div> */}
                      {
                        <>
                          <div className="space-y-2">
                            <Input
                              marker="name"
                              label="Set group name"
                              value={values.name}
                              id="name"
                              name="name"
                              onChange={(_marker, _value, e) => {
                                handleChange(e);
                              }}
                              errorMessage={errors.name}
                              required
                            />
                          </div>
                          <Alert
                            title="Email routing preference"
                            message="Order the SMTP providers in the group in  order of the preference of the provider you’d like to send emails via. If the preferred platform fails, the emails will be delivered using the next provider in the SMTP group"
                          />
                          <ProvidersDraggableTable id={id} />
                          <div className="grid grid-col-3 md:grid-cols-5 gap-4 content-center">
                            <div className="space-y-2 col-span-2 md:col-span-4">
                              <Select
                                loading={isEmailProvidersLoading}
                                marker="provider"
                                options={getEmailProvidersOptions(
                                  emailProviders,
                                )}
                                name="provider"
                                placeholder="Select SMTP provider"
                                value={values.provider}
                                onChange={(marker, { value }) => {
                                  setFieldValue(marker, value);
                                }}
                              />
                            </div>
                            <div className="col-span-1 md:col-span-1 flex">
                              <Button
                                block
                                icon={PlusIcon}
                                disabled={
                                  !values.provider || isProvidersLoading
                                }
                                onClick={() => {
                                  setAddProviderModal({
                                    id: values.provider,
                                    isVisible: true,
                                  });
                                }}
                              >
                                Add
                              </Button>
                            </div>
                          </div>
                        </>
                      }
                      <Button
                        disabled={
                          !values.name ||
                          values.providerList.length < 1 ||
                          isProvidersLoading
                        }
                        htmlType="submit"
                        loading={isSubmitting}
                      >
                        Save and Complete
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        <Modal
          visible={addProviderModal.isVisible}
          setVisible={(status) => {
            setAddProviderModal((prevState) => {
              return {
                ...prevState,
                isVisible: status,
              };
            });
          }}
          footer={false}
          widthClass="max-w-2xl"
          centered
        >
          <AddProvider
            emailProviderId={addProviderModal.id}
            loading={isProvidersLoading}
            onProviderAdd={handleProviderAdd}
            mode="ADD"
            providerGroupId={id}
          />
        </Modal>
      </Loader>
    </div>
  );
};
