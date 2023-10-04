import { AdjustmentsIcon, SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Button, Input } from '../../components';
import * as Yup from 'yup';
import { nseApi } from '../../services';
import { useAppDispatch, useAppSelector } from '../../state';
import { Field, FieldProps, Form, Formik } from 'formik';

const searchFormikSchema = Yup.object().shape({
  search: Yup.string().required('Search value is required'),
});

interface ISearchTraffic {
  type: 'emailReports' | 'notificationReports';
  search: string;
  setSearch: (search: string) => void;
  setIsAdvanceFilterVisibility: () => void;
}

const SearchTraffic = ({
  type = 'emailReports',
  search = '',
  setSearch = () => null,
  setIsAdvanceFilterVisibility = () => null,
}: ISearchTraffic) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.emailReports);
  const navigate = useNavigate();

  //listEmailReports
  const searchReports = (
    data: { [key: string]: string },
    setSubmitting?: (isSubmitting: boolean) => void,
  ) => {
    if (type === 'emailReports') {
      dispatch(
        nseApi.endpoints.searchEmailReports.initiate({
          q: data?.search || '',
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
    } else {
      dispatch(
        nseApi.endpoints.searchNotificationReports.initiate({
          q: data?.search || '',
          filter: {
            status: 'BOUNCE|DROPPED|FAILED|SPAM',
          },
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
    }
  };

  return (
    <Formik
      initialValues={{
        search,
      }}
      validationSchema={searchFormikSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        setSearch(data.search);
        searchReports(data, setSubmitting);
      }}
      enableReinitialize={true}
    >
      {(formik) => {
        const { isSubmitting, values } = formik;
        return (
          <Form>
            <div className="w-[36rem] flex items-end space-x-2">
              <Field name="search">
                {({ field }: FieldProps) => (
                  <Input
                    type="text"
                    marker="search"
                    placeholder={`Search in ${
                      type === 'emailReports'
                        ? 'SMTP Traffic'
                        : 'Notification Events'
                    }`}
                    value={field.value}
                    id="search"
                    name="search"
                    required
                    onChange={(_marker, _value, e) => field.onChange(e)}
                    addonAfter={
                      <AdjustmentsIcon
                        className="z-50 h-5 w-5 transform rotate-90 text-secondary  cursor-pointer"
                        onClick={setIsAdvanceFilterVisibility}
                      />
                    }
                  />
                )}
              </Field>
              <Button
                htmlType="submit"
                loading={isSubmitting}
                disabled={!values.search || isLoading}
                icon={SearchIcon}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchTraffic;
