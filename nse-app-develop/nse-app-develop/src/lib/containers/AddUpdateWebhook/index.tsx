import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Button,
  CopyText,
  Input,
  ISelectOption,
  Loader,
  Select,
  TextArea,
  Toggle,
} from '../../components';
import * as Yup from 'yup';
import {
  emailProvidersSelector,
  useAppDispatch,
  useAppSelector,
  webhookSelector,
} from '../../state';
import { nseApi } from '../../services';
import { toast } from 'react-toastify';
import { IEmailProvider, IWebhookConfigurations } from '../../types';
import { SECONDARY_COLOR, WEBHOOK_EVENTS } from '../../utils/constants';

const webhookFormikSchema = Yup.object().shape({
  name: Yup.string().required('Webhook name is require'),
  provider: Yup.string().required('SMTP provider is require'),
});

const defaultWebhookConfig: IWebhookConfigurations = {
  isDelivered: false,
  isBounced: true,
  isFailed: true,
  isDropped: true,
  isDeferred: true,
  isSpammed: true,
};

interface IAddUpdateWebhook {
  webhookId?: string;
  updateWebhookId?: (id: string) => void;
  closeModal?: () => void;
}

export const AddUpdateWebhook: React.FC<IAddUpdateWebhook> = ({
  webhookId = '',
  updateWebhookId = () => null,
  closeModal = () => null,
}) => {
  const dispatch = useAppDispatch();

  const { page, limit } = useAppSelector((state) => state.webhooks);
  const webhookData = useAppSelector((state) =>
    webhookSelector.selectById(state, webhookId),
  );

  const { isLoading: isDomainsLoading } = useAppSelector(
    (state) => state.domain,
  );
  const emailProviders = useAppSelector((state) =>
    emailProvidersSelector.selectAll(state),
  );
  const { isLoading } = useAppSelector((state) => state.webhooks);

  //local state
  const [webhookUrl, setWebhookUrl] = useState('');
  const [capturingResponse, setCapturingResponse] = useState({
    captureStartTime: '',
    response: {},
  });
  const [isCapturing, setIsCapturing] = useState(false);

  const getProvidersOptions = (
    emailProviders: IEmailProvider[],
  ): ISelectOption[] => {
    return emailProviders.map((item) => {
      return {
        label: item.name || '',
        value: item._id,
      };
    });
  };

  const getWebhookUrl = (id: string) => {
    return `${process.env.REACT_APP_BASE_SERVICE_URL}/api/v1/webhooks/${id}`;
  };

  const captureWebhook = () => {
    if (!isCapturing || !capturingResponse?.captureStartTime) return;
    dispatch(
      nseApi.endpoints.captureResponse.initiate({
        webhookId,
        captureTime: capturingResponse?.captureStartTime,
      }),
    )
      .unwrap()
      .then((res) => {
        setCapturingResponse((prevState) => ({
          ...prevState,
          response: res?.result as unknown as string,
          captureStartTime: '',
        }));
        setIsCapturing(false);
      });
  };

  const notInitialRender = useRef(false);
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    if (notInitialRender.current) {
      let count = 11;
      intervalId = setInterval(() => {
        count--;
        if (count <= 0 || isCapturing === false) {
          clearInterval(intervalId);
          setIsCapturing(false);
          setCapturingResponse({
            ...capturingResponse,
            captureStartTime: '',
          });
        }
        captureWebhook();
      }, 5000);
    } else {
      notInitialRender.current = true;
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isCapturing]);

  useEffect(() => {
    return () => {
      updateWebhookId('');
    };
  }, []);

  return (
    <Formik
      initialValues={{
        name: webhookData?.name || '',
        accountId: webhookData?.accountId || '',
        description: webhookData?.description || '',
        provider: webhookData?.provider || '',
        configurations: webhookData?.configurations || defaultWebhookConfig,
      }}
      validationSchema={webhookFormikSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        if (webhookId) {
          dispatch(
            nseApi.endpoints.updateWebhook.initiate({
              id: webhookId,
              body: data,
            }),
          )
            .unwrap()
            .then(() => {
              toast.success(`Updated successfully`);
              updateWebhookId('');
            })
            .catch((err) => {
              toast.error(err.data?.message || `Something went wrong`);
            })
            .finally(() => {
              setSubmitting(false);

              closeModal();
            });
        } else {
          dispatch(
            nseApi.endpoints.createWebhook.initiate({
              name: data.name,
              accountId: data?.accountId || '',
              description: data.description || '',
              provider: data.provider || '',
              configurations: data.configurations,
              isActive: true,
            }),
          )
            .unwrap()
            .then((res) => {
              dispatch(
                nseApi.endpoints.listWebhooks.initiate({
                  page,
                  limit,
                }),
              );
              toast.success(`Webhook added successfully`);
              setWebhookUrl(getWebhookUrl(res?.result?._id) || '');
              updateWebhookId(res?.result?._id);
            })
            .catch((err) => {
              toast.error(err.data?.message || `Something went wrong`);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }
      }}
      enableReinitialize={true}
    >
      {(formik) => {
        const { setFieldValue, isSubmitting } = formik;
        return (
          <Form>
            <Loader loading={isLoading} size="small" color={SECONDARY_COLOR}>
              <div
                // className={`mb-5 ${
                //   webhookUrl || webhookId
                //     ? 'w-[60vw] grid grid-cols-2 gap-5 '
                //     : 'w-full'
                // }`}
                className={`mb-5 max-h-[60vh] px-1 overflow-y-auto slim-scroll`}
              >
                <div className="space-y-3">
                  <div className="w-full">
                    <Field name="name">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          type="text"
                          className="mt-0"
                          label="Account Name"
                          marker="name"
                          value={field.value}
                          id="name"
                          name="name"
                          required
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, e) => field.onChange(e)}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field name="accountId">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          type="text"
                          className="mt-0"
                          label="Account ID"
                          marker="accountId"
                          value={field.value}
                          id="accountId"
                          name="accountId"
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, e) => field.onChange(e)}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field name="provider">
                      {({ meta, field }: FieldProps) => (
                        <Select
                          label="SMTP Vendor"
                          marker="provider"
                          options={getProvidersOptions(emailProviders)}
                          name="provider"
                          placeholder="Select service"
                          value={field.value}
                          onChange={(marker, { value }) => {
                            setFieldValue(marker, value);
                          }}
                          loading={isDomainsLoading}
                          required
                          errorMessage={meta.touched ? meta.error : ''}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field name="description">
                      {({ field, meta }: FieldProps) => (
                        <TextArea
                          className="mt-0 slim-scroll"
                          label="Notes"
                          marker="description"
                          value={field.value}
                          id="description"
                          name="description"
                          maxLength={250}
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, e) => field.onChange(e)}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="w-full mt-5 space-y-2">
                    <p className="block text-sm font-medium text-gray-700">
                      Select Webhook Events
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                      {Object.keys(WEBHOOK_EVENTS).map((event) => (
                        <Field
                          key={`configurations.${event}`}
                          name={`configurations.${event}`}
                        >
                          {({ field }: FieldProps) => (
                            <Toggle
                              label={`${WEBHOOK_EVENTS[event]}`}
                              checked={field.value}
                              disabled={webhookUrl ? true : false}
                              onChange={(value) =>
                                setFieldValue(`configurations.${event}`, value)
                              }
                            />
                          )}
                        </Field>
                      ))}
                    </div>
                  </div>
                  {(webhookUrl || webhookId) && (
                    <div className="">
                      <label
                        className={`block text-sm font-medium text-gray-700 mb-2`}
                      >
                        Webhook url:
                      </label>
                      <Alert
                        message={
                          <CopyText
                            text={webhookUrl || getWebhookUrl(webhookId)}
                          >
                            {webhookUrl || getWebhookUrl(webhookId)}
                          </CopyText>
                        }
                      />
                    </div>
                  )}
                </div>
                <div
                  className={`mt-5  ${
                    webhookUrl || webhookId ? 'space-y-3' : 'hidden'
                  }`}
                >
                  <div>
                    <Alert
                      type="default"
                      message="Copy this webhook URL and add it under the webhook section of the application you want to integrate with. Once you're done with adding the webhook URL, then do a test submission/record in that application in order to capture the webhook response here. Note that each SMTP Provider / Account should use a unique webhook URL."
                    />
                  </div>
                  <div>
                    {isCapturing ? (
                      <Button onClick={() => setIsCapturing(false)}>
                        Stop Capturing
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          setCapturingResponse({
                            ...capturingResponse,
                            captureStartTime: new Date()?.toISOString(),
                            response: {},
                          });
                          setIsCapturing(true);
                        }}
                      >
                        Capture Response
                      </Button>
                    )}
                  </div>
                  <div className="w-full space-y-1">
                    <p className="block text-sm font-medium text-gray-700">
                      Response
                    </p>
                    <Loader loading={isCapturing} color={SECONDARY_COLOR}>
                      <div className="h-56 overflow-y-auto w-full border-2 border-gray-400 rounded-sm p-1 text-sm text-gray-600">
                        {capturingResponse?.response && (
                          <pre>
                            {JSON.stringify(
                              capturingResponse?.response,
                              null,
                              2,
                            )}
                          </pre>
                        )}
                      </div>
                    </Loader>
                  </div>
                </div>
              </div>

              <div className="flex w-full justify-end space-x-2">
                <Button type="ghost" onClick={closeModal}>
                  Cancel
                </Button>
                <Button htmlType="submit" loading={isSubmitting}>
                  Save
                </Button>
              </div>
            </Loader>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddUpdateWebhook;
