/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchIcon } from '@heroicons/react/outline';
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik';
import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Button, Input, Select } from '../../components';
import { nseApi } from '../../services';
import { useAppDispatch, useAppSelector } from '../../state';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { IFilter } from '../../types';
import { defaultFilter } from '../../../pages/Traffic';

const filterOptions = [
  {
    label: 'Domain',
    value: 'domain',
  },
  {
    label: 'Sender',
    value: 'sender',
  },
  {
    label: 'Recipient',
    value: 'recipient',
  },
  {
    label: 'Status',
    value: 'status',
  },
  {
    label: 'Subject',
    value: 'subject',
  },
];

const filterFormikSchema = Yup.object().shape({
  field: Yup.string().required('Filter filed is require'),
  value: Yup.string().required('Value is require'),
});

interface IFilterEmailReports {
  filter: IFilter;
  setFilter: (filters: IFilter) => void;
}

const FilterEmailReports = ({
  filter = defaultFilter,
  setFilter = () => null,
}: IFilterEmailReports) => {
  const dispatch = useAppDispatch();
  const { limit, isLoading } = useAppSelector((state) => state.emailReports);

  const navigate = useNavigate();
  // type FormValues = {};
  const formikRef = useRef<FormikProps<{ [key: string]: string }>>(null);

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.setFieldValue('value', '');
      formikRef.current.setFieldValue('field', '');
    }
  }, [filter]);

  //listEmailReports
  const listEmailReports = (
    data: { [key: string]: string },
    setSubmitting?: (isSubmitting: boolean) => void,
  ) => {
    dispatch(
      nseApi.endpoints.listEmailReports.initiate({
        page: 1,
        limit,
        fields: 'domain,sender,recipient,subject,status,error,updatedAt',
        ...(data && {
          filter: {
            [data.field]: data.value,
          },
        }),
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
      })
      .finally(() => {
        if (setSubmitting) setSubmitting(false);
        navigate({ search: '?page=1' });
      });
  };

  return (
    <div className="w-full flex justify-between">
      <Formik
        innerRef={formikRef}
        initialValues={{
          value: '',
          field: '',
        }}
        validationSchema={filterFormikSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          setFilter({
            [data.field]: data.value,
          });
          listEmailReports(data, setSubmitting);
        }}
        onReset={() => {
          setFilter(defaultFilter);
          listEmailReports({});
        }}
        enableReinitialize={true}
      >
        {(formik) => {
          const { setFieldValue, isSubmitting, values } = formik;
          return (
            <Form>
              <div className="flex justify-start items-center space-x-3 w-4/5  ">
                <Field name="value">
                  {({ field }: FieldProps) => (
                    <Input
                      type="text"
                      className="mt-1 w-96"
                      marker="value"
                      placeholder="Search"
                      value={field.value}
                      id="value"
                      name="value"
                      required
                      onChange={(_marker, _value, e) => field.onChange(e)}
                    />
                  )}
                </Field>
                <Field name="field">
                  {({ field }: FieldProps) => (
                    <Select
                      marker="field"
                      options={filterOptions}
                      name="domain"
                      placeholder="Select Filter"
                      value={field.value}
                      onChange={(marker, { value }) => {
                        setFieldValue(marker, value);
                      }}
                      required
                    />
                  )}
                </Field>
                <Button
                  className="mt-1 ml-20"
                  htmlType="submit"
                  loading={isSubmitting}
                  disabled={!values.field || !values.value || isLoading}
                  icon={SearchIcon}
                />
                <Button
                  htmlType="reset"
                  type="ghost"
                  loading={isSubmitting}
                  disabled={
                    isLoading || filter[Object.keys(filter)[0] as keyof IFilter]
                      ? false
                      : true
                  }
                >
                  Reset
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FilterEmailReports;
