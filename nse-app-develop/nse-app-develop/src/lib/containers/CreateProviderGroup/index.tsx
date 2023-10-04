import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Button, Input } from '../../components';
import { nseApi } from '../../services';
import { useAppDispatch, useAppSelector } from '../../state';
// import { IDomain } from '../../types';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface CreateProviderGroup {
  onProviderCreateGroup: () => void;
  domain?: string | null;
}

const providerGroupSchema = Yup.object().shape({
  // domain: Yup.string().required('Domain required'),
  name: Yup.string().required('Group name is required'),
});

export const CreateProviderGroup: React.FC<CreateProviderGroup> = ({
  onProviderCreateGroup = () => null,
}) => {
  // hooks here
  const disptch = useAppDispatch();
  // const domains = useAppSelector((state) => domainSelector.selectAll(state));
  const { isLoading } = useAppSelector((state) => state.domain);
  const navigate = useNavigate();

  // const getDomainId = (domain: string | null | undefined) => {
  //   if (!domain) return;
  //   return domains.find((dom) => dom.domain === domain);
  // };

  const getAllDomains = () => {
    disptch(
      nseApi.endpoints.listDomains.initiate({
        page: 1,
        limit: 100,
        fields: 'domain',
        filter: {
          isVerified: true,
        },
      }),
    )
      .unwrap()
      .catch((err) => {
        toast(
          err.data?.message ||
            'Something went wrong while fetching your domain. Please try again',
          {
            type: 'error',
          },
        );
      });
  };

  // const getDomainOptions = (domains: IDomain[]): ISelectOption[] => {
  //   return domains.map((item) => {
  //     return {
  //       label: item.domain || '',
  //       value: item._id,
  //     };
  //   });
  // };

  useEffect(() => {
    getAllDomains();
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          // domain: getDomainId(domain || undefined)?._id || '',
          name: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          const { name } = values || {};
          disptch(
            nseApi.endpoints.createProviderGroup.initiate({
              domain: [],
              name,
            }),
          )
            .unwrap()
            .then((res) => {
              onProviderCreateGroup();
              navigate(`/group-config/${res.result._id}`);
            })
            .catch((err) => {
              toast(
                err.data?.message ||
                  'Something went wrong while creating group. Please try again',
                {
                  type: 'error',
                },
              );
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
        validationSchema={providerGroupSchema}
      >
        {(formik) => {
          const { values, isSubmitting } = formik;
          return (
            <Form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Field name="name">
                    {({ field, meta }: FieldProps) => (
                      <Input
                        marker="name"
                        label="Enter Group Name"
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
                {/* <div className="space-y-2">
                  <Select
                    marker="domain"
                    options={getDomainOptions(domains)}
                    value={values.domain}
                    placeholder="Select domain"
                    label="Select Domain"
                    loading={isLoading}
                    onChange={(marker, { value }) => {
                      setFieldValue(marker, value);
                    }}
                  />
                </div> */}
                <div className="space-y-2 flex justify-end">
                  <Button
                    htmlType="submit"
                    disabled={!values.name || isLoading}
                    loading={isSubmitting}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateProviderGroup;
