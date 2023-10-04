import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Input, Modal } from '../../components';
import {
  cloudStoragesSettingsActions,
  cloudStoragesSettingsSelector,
  useAppDispatch,
  useAppSelector,
} from '../../state';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { nseApi } from '../../services';
import { CLOUD_STORAGES, CLOUD_STORAGES_OPTIONS } from '../../utils/constants';

export const AddCloudStorageSettings = () => {
  const dispatch = useAppDispatch();
  const { limit, email, refreshToken, cloudStorageName } = useAppSelector(
    (state) => state.cloudStoragesSettings,
  );
  const [isAddStorageModalVisible, setIsAddStorageModalVisible] =
    useState(false);

  useEffect(() => {
    if (email && refreshToken) setIsAddStorageModalVisible(true);
  }, [email, refreshToken]);

  //listApiKeys
  const listCloudStoragesSettings = () => {
    dispatch(
      nseApi.endpoints.listCloudStoragesSettings.initiate({
        page: 1,
        limit,
      }),
    )
      .unwrap()
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

  const resetCloudStoargeSavedData = () => {
    dispatch(
      cloudStoragesSettingsActions.setCloudStorageName({
        email: '',
        refreshToken: '',
        cloudStorageName: CLOUD_STORAGES.GOOGLE_DRIVE,
      }),
    );
  };

  return (
    <div>
      <Modal
        setVisible={setIsAddStorageModalVisible}
        visible={isAddStorageModalVisible}
        footer={false}
        title="Cloud Storage"
        onClose={resetCloudStoargeSavedData}
        onCancel={resetCloudStoargeSavedData}
      >
        <Formik
          initialValues={{
            name: '',
            email,
            cloudStorageName:
              CLOUD_STORAGES_OPTIONS[cloudStorageName || 'GOOGLE_DRIVE'],
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            const { name } = values || {};
            dispatch(
              nseApi.endpoints.createCloudStorageSettings.initiate({
                body: {
                  name,
                  cloudStorageName,
                  isActive: false,
                  email,
                  data: {
                    refreshToken: refreshToken,
                  },
                },
              }),
            )
              .unwrap()
              .then(() => {
                listCloudStoragesSettings();
                toast.success(`Cloud platform added successfully`);
              })
              .catch((err) => {
                toast.error(err.data?.message || `Something went wrong`);
              })
              .finally(() => {
                setSubmitting(false);
                setIsAddStorageModalVisible(false);
              });
          }}
          validationSchema={Yup.object().shape({
            // domain: Yup.string().required('Domain required'),
            name: Yup.string().required('Group name is required'),
          })}
        >
          {(formik) => {
            const { values, isSubmitting } = formik;
            return (
              <Form>
                <div className="space-y-4">
                  <div className="w-full">
                    <Field name="name">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          marker="name"
                          label="Name"
                          value={values.name}
                          name="name"
                          id="name"
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, event) => {
                            field.onChange(event);
                          }}
                          autoFocus={true}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field name="email">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          marker="email"
                          label="Email"
                          value={values.email}
                          name="email"
                          id="email"
                          disabled
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, event) => {
                            field.onChange(event);
                          }}
                          autoFocus={true}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field name="cloudStorageName">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          marker="cloudStorageName"
                          label="Cloud Storage"
                          value={values.cloudStorageName}
                          name="cloudStorageName"
                          id="cloudStorageName"
                          disabled
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, event) => {
                            field.onChange(event);
                          }}
                          autoFocus={true}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="space-y-2 flex justify-end">
                    <Button
                      htmlType="submit"
                      disabled={!values.name}
                      loading={isSubmitting}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
};

export interface IUpdateCloudStorageSettings {
  cloudStorageId: string;
  updateModalVisibility: boolean;
  setUpdateModalVisibility: (data: boolean) => void;
}

export const UpdateCloudStorageSettings: React.FC<
  IUpdateCloudStorageSettings
> = ({
  cloudStorageId,
  updateModalVisibility = false,
  setUpdateModalVisibility = () => null,
}) => {
  const dispatch = useAppDispatch();
  const { limit } = useAppSelector((state) => state.cloudStoragesSettings);
  const cloudStorageData = useAppSelector((state) =>
    cloudStoragesSettingsSelector.selectById(state, cloudStorageId),
  );

  //listApiKeys
  const listCloudStoragesSettings = () => {
    dispatch(
      nseApi.endpoints.listCloudStoragesSettings.initiate({
        page: 1,
        limit,
      }),
    )
      .unwrap()
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

  return (
    <div>
      <Modal
        setVisible={setUpdateModalVisibility}
        visible={updateModalVisibility}
        footer={false}
        title="Cloud storage"
      >
        <Formik
          initialValues={{
            name: cloudStorageData?.name || '',
            email: cloudStorageData?.email || '',
            cloudStorageName:
              CLOUD_STORAGES_OPTIONS[
                cloudStorageData?.cloudStorageName || 'GOOGLE_DRIVE'
              ],
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            dispatch(
              nseApi.endpoints.updateCloudStorageSettings.initiate({
                id: cloudStorageId,
                body: {
                  name: values?.name || '',
                },
              }),
            )
              .unwrap()
              .then(() => {
                listCloudStoragesSettings();
                toast.success(`Cloud platform added successfully`);
              })
              .catch((err) => {
                toast.error(err.data?.message || `Something went wrong`);
              })
              .finally(() => {
                setUpdateModalVisibility(false);
                setSubmitting(false);
              });
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Group name is required'),
          })}
        >
          {(formik) => {
            const { values, isSubmitting } = formik;
            return (
              <Form>
                <div className="space-y-4">
                  <div className="w-full">
                    <Field name="name">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          marker="name"
                          label="Name"
                          value={values.name}
                          name="name"
                          id="name"
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, event) => {
                            field.onChange(event);
                          }}
                          autoFocus={true}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field name="email">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          marker="email"
                          label="Email"
                          value={values.email}
                          name="email"
                          id="email"
                          disabled
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, event) => {
                            field.onChange(event);
                          }}
                          autoFocus={true}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field name="cloudStorageName">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          marker="cloudStorageName"
                          label="Cloud Storage"
                          value={values.cloudStorageName}
                          name="cloudStorageName"
                          id="cloudStorageName"
                          disabled
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, event) => {
                            field.onChange(event);
                          }}
                          autoFocus={true}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="space-y-2 flex justify-end">
                    <Button
                      htmlType="submit"
                      disabled={!values.name}
                      loading={isSubmitting}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
};
