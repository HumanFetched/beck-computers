import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import { Button, Input, TextArea, Toggle, Loader } from '../../components';
import * as Yup from 'yup';
import { apiKeySelector, useAppDispatch, useAppSelector } from '../../state';
import { nseApi } from '../../services';
import { toast } from 'react-toastify';
import { IApiKey, IProviderGroup } from '../../types';
import { SECONDARY_COLOR } from '../../utils/constants';

const apiKeysFormikSchema = Yup.object().shape({
  name: Yup.string().required('Api Key name is require'),
});

interface IAddApiKey {
  mode: 'ADD' | 'UPDATE';
  apiKeyId?: string;
  loading?: boolean;
  providerGroups: IProviderGroup[];
  isproviderGroupsLoading?: boolean;
  onApiKeyAdd?: (data: IApiKey) => void;
  onApiKeyUpdate?: (data: IApiKey) => void;
}

export const AddApiKey: React.FC<IAddApiKey> = ({
  mode,
  apiKeyId = '',
  loading = false,
  onApiKeyAdd = () => null,
  onApiKeyUpdate = () => null,
}) => {
  const dispatch = useAppDispatch();

  const apiKeyData = useAppSelector((state) =>
    apiKeySelector.selectById(state, apiKeyId),
  );
  const { page, limit } = useAppSelector((state) => state.apiKey);

  return (
    <div>
      <Loader loading={loading} color={SECONDARY_COLOR} size={'small'}>
        <Formik
          initialValues={{
            name: apiKeyData?.name || '',
            description: apiKeyData?.description || '',
            isActive: apiKeyData?.isActive || false,
          }}
          validationSchema={apiKeysFormikSchema}
          onSubmit={(data, { setSubmitting }) => {
            if (mode === 'ADD') {
              setSubmitting(true);
              dispatch(
                nseApi.endpoints.createApiKey.initiate({
                  name: data.name,
                  description: data.description,
                  isActive: data.isActive,
                }),
              )
                .unwrap()
                .then((res) => {
                  dispatch(
                    nseApi.endpoints.listApiKeys.initiate({
                      page,
                      limit,
                    }),
                  );
                  toast.success(`Api key added successfully`);
                  onApiKeyAdd(res.result);
                })
                .catch((err) => {
                  toast.error(err.data?.message || `Something went wrong`);
                })
                .finally(() => {
                  setSubmitting(false);
                });
            } else {
              setSubmitting(true);
              dispatch(
                nseApi.endpoints.updateApiKey.initiate({
                  id: apiKeyId,
                  body: data,
                }),
              )
                .unwrap()
                .then((res) => {
                  toast.success(`Updated successfully`);
                  onApiKeyUpdate(res.result);
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
                <div className="w-full space-y-4 flex flex-col mb-10">
                  <div className="w-full">
                    <Field name="name">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          type="text"
                          className="mt-0"
                          label="Name"
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
                  <div className="w-full ">
                    <Field name="description">
                      {({ field, meta }: FieldProps) => (
                        <TextArea
                          className="mt-0"
                          maxLength={1000}
                          size={'large'}
                          label="Description"
                          marker="description"
                          value={field.value}
                          id="description"
                          name="description"
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, e) => field.onChange(e)}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="w-full ">
                    <Field name="isActive">
                      {({ field }: FieldProps) => (
                        <Toggle
                          label="Is Active ?"
                          checked={field.value}
                          onChange={(value) => setFieldValue('isActive', value)}
                        />
                      )}
                    </Field>
                  </div>
                </div>

                <div className="flex w-full justify-end space-x-2">
                  <Button htmlType="reset" type="ghost">
                    Reset
                  </Button>
                  <Button htmlType="submit" loading={isSubmitting}>
                    {mode === 'ADD' ? 'Add Key' : 'Update'}
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Loader>
    </div>
  );
};

export default AddApiKey;
