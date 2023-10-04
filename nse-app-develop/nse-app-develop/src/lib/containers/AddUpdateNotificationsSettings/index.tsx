import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Input,
  InputNumber,
  ISelectOption,
  Loader,
  Select,
  TextArea,
  Toggle,
  // Tooltip,
} from '../../components';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../state';
import { nseApi } from '../../services';
import { toast } from 'react-toastify';
import { IDomain } from '../../types';
import { notificationsSettingsSelector } from '../../state/notificationsSettings/notificationsSettings.slice';
import { SECONDARY_COLOR } from '../../utils/constants';
import { PlusSmIcon } from '@heroicons/react/solid';
import { isValidDomain } from '../../utils/helper';
import { isArray } from 'lodash';

const notificationsSettingsFormikSchema = Yup.object().shape({
  maxNotifications: Yup.number()
    .typeError('Max Notifications must be a number')
    .required('Required')
    .min(-1, 'Limit cannot be less than -1'),
  domain: Yup.string().required('Domain is require'),
  notifyEmails: Yup.string()
    .matches(
      /^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/g,
      'Please add valid email id',
    )
    .required("minimum one email id required use ',' to separate "),
});

interface IAddUpdateNotificationsSettings {
  notificationsSettingId?: string;
  setNotificationsSettingId?: (data: string) => void;
  closeModal?: () => void;
}

export const AddUpdateNotificationsSettings: React.FC<
  IAddUpdateNotificationsSettings
> = ({
  notificationsSettingId = '',
  setNotificationsSettingId = () => null,
  closeModal = () => null,
}) => {
  const dispatch = useAppDispatch();

  const notificationData = useAppSelector((state) =>
    notificationsSettingsSelector.selectById(state, notificationsSettingId),
  );
  const { page, limit } = useAppSelector(
    (state) => state.notificationsSettings,
  );

  const { isLoading } = useAppSelector((state) => state.notificationsSettings);
  const { isLoading: isDomainsLoading } = useAppSelector(
    (state) => state.domain,
  );

  const [domainOptions, setDomainOptions] = useState<{
    menuStatus: boolean;
    newDomain: string;
    domains: ISelectOption[];
  }>({
    menuStatus: false,
    newDomain: '',
    domains: [],
  });

  useEffect(() => {
    getListDomains();
  }, []);

  const getListDomains = () => {
    dispatch(
      nseApi.endpoints.listDomains.initiate({
        page: 1,
        limit: 100,
        fields: 'domain',
      }),
    )
      .unwrap()
      .then((res) => {
        const domains = getDomainsOptions(res.results);
        const domainExist = domains.some(
          (domain) => domain.value === notificationData?.domain,
        );
        if (notificationData?.domain && !domainExist) {
          domains.unshift({
            label: notificationData?.domain,
            value: notificationData?.domain,
          });
        }
        setDomainOptions({
          ...domainOptions,
          domains: [...domains],
        });
      })
      .catch((err) => {
        toast(
          err.data?.message ||
            'Something went wrong. Please try after some time',
          {
            type: 'error',
          },
        );
      });
  };

  const getDomainsOptions = (domains: IDomain[]) => {
    return domains.map((item) => {
      return {
        label: item.domain || '',
        value: item.domain || '',
      };
    });
  };

  const addDomainToDomainOptions = () => {
    const domainExist = domainOptions.domains.some(
      (domain) => domain.value === domainOptions.newDomain,
    );
    if (domainExist) {
      toast.error('Domain already exist in list');
      setDomainOptions({
        ...domainOptions,
        newDomain: '',
      });
      return;
    }
    setDomainOptions({
      ...domainOptions,
      menuStatus: false,
      domains: [
        { label: `${domainOptions.newDomain}`, value: domainOptions.newDomain },
        ...domainOptions.domains,
      ],
      newDomain: '',
    });
  };

  return (
    <Formik
      initialValues={{
        maxNotifications: notificationData?.maxNotifications || 1,
        domain: notificationData?.domain || '',
        email: notificationData?.email?.split('@')[0] || '',
        notifyEmails: notificationData?.notifyEmails?.join(',\n') || '',
        isActive: notificationData?.isActive || false,
        isNotifySender: notificationData?.isNotifySender || false,
        comments: notificationData?.comments || '',
      }}
      validationSchema={notificationsSettingsFormikSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);

        //check added email domain should be from domain list
        // if (data.email && data.email.split('@')[1] !== data.domain) {
        //   toast.error('Please add email with selected domain');
        //   setSubmitting(false);
        //   return;
        // }

        const notificationEmail = data.notifyEmails.replaceAll(/\s/g, '');
        if (notificationsSettingId) {
          dispatch(
            nseApi.endpoints.updateNotificationsSetting.initiate({
              id: notificationsSettingId,
              body: {
                domain: data.domain.toLocaleLowerCase(),
                email: data.email
                  ? `${data.email}@${data.domain}` // add only prefix when user add whole email address
                  : '',
                maxNotifications: data.maxNotifications,
                notifyEmails: notificationEmail
                  ?.replaceAll('\n', '')
                  ?.split(','),
                isActive: data.isActive,
                isNotifySender: data.isNotifySender,
                comments: data.comments,
              },
            }),
          )
            .unwrap()
            .then(() => {
              toast.success(`Updated successfully`);
            })
            .catch((err) => {
              toast.error(
                isArray(err.data?.message)
                  ? err.data?.message[0]
                  : err.data?.message || `Something went wrong`,
              );
            })
            .finally(() => {
              setSubmitting(false);
              closeModal();
            });
        } else {
          dispatch(
            nseApi.endpoints.createNotificationsSetting.initiate({
              domain: data.domain.toLocaleLowerCase(),
              email: data.email
                ? `${data.email}@${data.domain}` // add only prefix when user add whole email address
                : '',
              maxNotifications: data.maxNotifications,
              notifyEmails: notificationEmail.replaceAll('\n', '')?.split(','),
              isActive: data.isActive,
              isNotifySender: data.isNotifySender,
              comments: data.comments,
            }),
          )
            .unwrap()
            .then((res) => {
              dispatch(
                nseApi.endpoints.listNotificationsSettings.initiate({
                  page,
                  limit,
                }),
              );
              toast.success(`Added successfully`);
              setNotificationsSettingId(res?.result?._id);
            })
            .catch((err) => {
              toast.error(
                isArray(err.data?.message)
                  ? err.data?.message[0]
                  : err.data?.message || `Something went wrong`,
              );
            })
            .finally(() => {
              setSubmitting(false);
            });
        }
      }}
      enableReinitialize={true}
    >
      {(formik) => {
        const { values, setFieldValue, isSubmitting } = formik;
        return (
          <Form>
            <Loader loading={isLoading} color={SECONDARY_COLOR}>
              <div className="w-full space-y-4 flex flex-col mb-10 max-h-[60vh] px-1 overflow-y-auto slim-scroll ">
                <div className="w-full">
                  <Field name="domain">
                    {({ meta, field }: FieldProps) => (
                      <Select
                        label="From Domain"
                        marker="domain"
                        options={domainOptions.domains}
                        name="domain"
                        placeholder="Select Domain"
                        value={field.value}
                        menuStatus={domainOptions.menuStatus}
                        onChange={(marker, { value }) => {
                          setFieldValue(marker, value);
                        }}
                        loading={isDomainsLoading}
                        required
                        errorMessage={meta.touched ? meta.error : ''}
                        extra={
                          <div className="flex justify-between items-center text-sm w-full text-secondary-600">
                            <div className="w-3/4 text-black ">
                              <Input
                                size="small"
                                placeholder={'Add domain to list'}
                                marker="domain"
                                value={domainOptions.newDomain}
                                onChange={(marker, value) =>
                                  setDomainOptions({
                                    ...domainOptions,
                                    newDomain: value,
                                  })
                                }
                                onPressEnter={() => {
                                  if (!isValidDomain(domainOptions.newDomain)) {
                                    toast('Invalid domain name', {
                                      type: 'error',
                                    });
                                    return;
                                  }
                                  setFieldValue(
                                    'domain',
                                    domainOptions.newDomain,
                                  );
                                  addDomainToDomainOptions();
                                }}
                              />
                            </div>
                            <Button
                              type="text"
                              icon={PlusSmIcon}
                              onClick={() => {
                                if (!isValidDomain(domainOptions.newDomain)) {
                                  toast('Invalid domain name', {
                                    type: 'error',
                                  });
                                  return;
                                }
                                setFieldValue(
                                  'domain',
                                  domainOptions.newDomain,
                                );
                                addDomainToDomainOptions();
                              }}
                            >
                              Add
                            </Button>
                          </div>
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="w-full">
                  <Field name="email">
                    {({ meta, field }: FieldProps) => (
                      <>
                        <p
                          className={
                            'block text-sm font-medium text-gray-700 mb-1 '
                          }
                        >
                          From Email
                        </p>
                        {/* <div className="w-full grid grid-cols-2 gap-2 items-center overflow-hidden text-ellipsis"> */}
                        <div>
                          <Input
                            marker="email"
                            value={field.value}
                            name="email"
                            id="email"
                            disabled={values?.domain ? false : true}
                            errorMessage={meta.touched ? meta.error : ''}
                            onChange={(_marker, _value, e) => {
                              if (_value?.includes('@')) return;
                              field.onChange(e);
                            }}
                            description="Note: Enter Only Prefix of Email Address."
                          />
                        </div>
                        {/* {values.domain && values.email && (
                            <p
                              className={
                                'block text-sm font-medium text-secondary'
                              }
                            >
                              <Tooltip title={values.domain}>
                                @{values.domain}
                              </Tooltip>
                            </p>
                          )} */}
                        {/* </div> */}
                      </>
                    )}
                  </Field>
                </div>
                <div className="w-full">
                  <Field name="maxNotifications">
                    {({ field, meta }: FieldProps) => (
                      <div className="space-y-2">
                        <InputNumber
                          marker={'maxNotifications'}
                          label={'Max Notifications'}
                          value={field.value}
                          id={'maxNotifications'}
                          name={'maxNotifications'}
                          min={1}
                          max={999}
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_, value) =>
                            setFieldValue(`maxNotifications`, value)
                          }
                          description="Note: Max per day"
                        />
                      </div>
                    )}
                  </Field>
                </div>
                <div className="w-full">
                  <Field name="isNotifySender">
                    {({ field }: FieldProps) => (
                      <div className="flex space-x-2 items-center">
                        <p className="block text-sm font-medium text-gray-700">
                          Notify Sender
                        </p>
                        <Toggle
                          checked={field.value}
                          onChange={(value) =>
                            setFieldValue('isNotifySender', value)
                          }
                        />
                      </div>
                    )}
                  </Field>
                </div>
                <div className="w-full">
                  <Field name="notifyEmails">
                    {({ field, meta }: FieldProps) => (
                      <TextArea
                        className="space-y-2 slim-scroll"
                        label="Notify Emails"
                        marker="notifyEmails"
                        value={field.value}
                        id="notifyEmails"
                        name="notifyEmails"
                        required
                        errorMessage={meta.touched ? meta.error : ''}
                        onChange={(_marker, _value, e) => field.onChange(e)}
                      />
                    )}
                  </Field>
                </div>
                <div className="w-full">
                  <Field name="comments">
                    {({ field, meta }: FieldProps) => (
                      <TextArea
                        className="space-y-2 slim-scroll"
                        label="Notes"
                        marker="comments"
                        value={field.value}
                        id="comments"
                        name="comments"
                        maxLength={250}
                        errorMessage={meta.touched ? meta.error : ''}
                        onChange={(_marker, _value, e) => field.onChange(e)}
                      />
                    )}
                  </Field>
                </div>
                <div className="w-full">
                  <Field name="isActive">
                    {({ field }: FieldProps) => (
                      <div className="flex space-x-2 items-center">
                        <p className="block text-sm font-medium text-gray-700">
                          Enable
                        </p>
                        <Toggle
                          checked={field.value}
                          onChange={(value) => setFieldValue('isActive', value)}
                        />
                      </div>
                    )}
                  </Field>
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

export default AddUpdateNotificationsSettings;
