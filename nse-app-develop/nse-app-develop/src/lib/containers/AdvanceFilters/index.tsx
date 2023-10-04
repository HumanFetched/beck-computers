import React, { useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import {
  Button,
  Checkbox,
  Input,
  ISelectOption,
  Loader,
  Select,
} from '../../components';
import { Field, FieldProps, Form, Formik } from 'formik';
import { nseApi } from '../../services';
import {
  providerGroupsActions,
  providerGroupsSelector,
  useAppDispatch,
  useAppSelector,
} from '../../state';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { IFilter } from '../../types';
import { SECONDARY_COLOR, TRAFFIC_DURATION } from '../../utils/constants';
import { domainRegex, getDate } from '../../utils/helper';

export const emailTrafficStatus: { [key: string]: string } = {
  SENT: 'SENT',
  QUEUED: 'QUEUED',
  DEFERRED: 'DEFERRED',
  DELIVERED: 'DELIVERED',
  BOUNCE: 'BOUNCE',
  FAILED: 'FAILED',
  DROPPED: 'DROPPED',
  SPAM: 'SPAM',
};

export const notificationTrafficStatus: { [key: string]: string } = {
  BOUNCE: 'BOUNCE',
  FAILED: 'FAILED',
  DROPPED: 'DROPPED',
  SPAM: 'SPAM',
};

const selectFieldOptions = [
  {
    label: 'Last 24 hours',
    value: '24H',
  },
  {
    label: 'Last 7 days',
    value: '7D',
  },
  {
    label: '1 Month',
    value: '1M',
  },
  {
    label: '3 Months',
    value: '3M',
  },
  {
    label: 'Custom',
    value: 'C',
  },
];

const advanceFilterValidationSchema = Yup.object().shape({
  domain: Yup.string().matches(domainRegex, 'Invalid domain'),
  sender: Yup.string()
    .email('Invalid email')
    .test(
      'Check email corresponding to from domain ',
      'Add email with corresponding from domain',
      (val, context) => {
        if (context.parent.domain && val)
          return val.split('@')[1] === context.parent.domain;
        return true;
      },
    ),
  toDomain: Yup.string().matches(domainRegex, 'Invalid domain'),
  recipient: Yup.string()
    .email('Invalid email')
    .test(
      'Check email corresponding to to domain ',
      'Add email with corresponding to domain',
      (val, context) => {
        if (context.parent.toDomain && val)
          return val.split('@')[1] === context.parent.toDomain;
        return true;
      },
    ),
  dateRange: Yup.string().required('Date range is require'),
  fromDuration: Yup.string().when('dateRange', (dateRange, schema) => {
    if (dateRange === TRAFFIC_DURATION.custom) {
      return schema.required('From Duration is require');
    }
    return schema;
  }),
  toDuration: Yup.string().when('dateRange', (dateRange, schema) => {
    if (dateRange === TRAFFIC_DURATION.custom) {
      return schema.required('To Duration is require');
    }
    return schema;
  }),
});

interface IAdvanceFilters {
  type: 'emailReports' | 'notificationReports';
  filter: IFilter;
  setFilter: (filters: IFilter) => void;
  setSearch: (search: string) => void;
  updateAdvanceFilterVisibility: () => void;
}

const AdvanceFilters = ({
  type = 'emailReports',
  filter,
  setFilter = () => null,
  setSearch = () => null,
  updateAdvanceFilterVisibility = () => null,
}: IAdvanceFilters) => {
  const dispatch = useAppDispatch();
  const { limit, isLoading } = useAppSelector((state) => state.emailReports);

  const { isLoading: providerIsLoading } = useAppSelector(
    (state) => state.providerGroups,
  );

  const providerGroups = useAppSelector((state) =>
    providerGroupsSelector.selectAll(state),
  );
  const navigate = useNavigate();

  const listProviderGroups = () => {
    dispatch(
      nseApi.endpoints.listProviderGroups.initiate({
        page: 1,
        limit: 50,
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

  const getProviderGroupOptions = (): ISelectOption[] => {
    return providerGroups.map((item) => {
      return {
        label: item.name || '',
        value: item._id,
      };
    });
  };

  useEffect(() => {
    listProviderGroups();
    return () => {
      dispatch(providerGroupsActions.reset());
    };
  }, []);

  return (
    <Formik
      initialValues={{
        ...filter,
      }}
      validationSchema={advanceFilterValidationSchema}
      onSubmit={(data: IFilter, { setSubmitting }) => {
        setSubmitting(true);

        let fields = '';
        if (type === 'emailReports') {
          fields = 'status,updatedAt,sender,recipient,subject,group,isNotified';
        } else {
          fields =
            'isNotified,notifiedAt,sender,recipient,subject,notificationFrom,notificationTo,status,group,bounceDetailShort,bounceDetailLong';
        }
        let fromDuration = data.fromDuration;
        let toDuration = data.toDuration;
        if (data.dateRange !== TRAFFIC_DURATION.custom) {
          const { fromDuration: from, toDuration: to } = getDate(
            data.dateRange || '',
          );
          fromDuration = from;
          toDuration = to;
        }
        let status = '';
        if (data?.status)
          status = data.status.slice(...(data.status[0] === '|' ? [1] : []));
        if (!data?.status && type === 'notificationReports') {
          status = 'BOUNCE|DROPPED|FAILED|SPAM';
        }

        const filterPayload = {
          ...(data.domain && { domain: data.domain }),
          ...(data.sender && { sender: data.sender }),
          ...(data.toDomain && !data.recipient && { toDomain: data.toDomain }),
          ...((data.recipient || data.toDomain) && {
            recipient: data.recipient,
          }),
          ...(data.group && { group: data.group }),
          ...(status && {
            status: status,
          }),
          ...(data.hasAttachment && { hasAttachment: true }),
        };
        setFilter({
          ...filterPayload,
          dateRange: data?.dateRange,
          status: data?.status,
          fromDuration: fromDuration || '',
          toDuration: toDuration || '',
        });
        const exportAdvanceSearcDispatcher = () => {
          if (type === 'emailReports') {
            return dispatch(
              nseApi.endpoints.listEmailReports.initiate({
                page: 1,
                limit,
                fields,
                filter: {
                  ...filterPayload,
                },
                fromDuration,
                toDuration,
              }),
            );
          } else {
            return dispatch(
              nseApi.endpoints.listNotificationsMonitor.initiate({
                page: 1,
                limit,
                fields,
                filter: {
                  ...filterPayload,
                },
                fromDuration,
                toDuration,
              }),
            );
          }
        };
        exportAdvanceSearcDispatcher()
          .unwrap()
          .then(() => setSearch(' '))
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
            setSubmitting(false);
            navigate({ search: '?page=1' });
            updateAdvanceFilterVisibility();
          });
      }}
      enableReinitialize={true}
    >
      {(formik) => {
        const { values, setFieldValue, isSubmitting } = formik;
        return (
          <Form>
            <Loader
              loading={isSubmitting || isLoading}
              size="small"
              color={SECONDARY_COLOR}
            >
              <div className="space-y-5 py-7 px-20 ">
                <div className="grid grid-cols-2 gap-3">
                  <div className="max-w-sm">
                    <Field name="domain">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          label={'From Domain'}
                          type="text"
                          marker="domain"
                          placeholder={'From Domain...'}
                          value={field.value}
                          id="domain"
                          name="domain"
                          onChange={(_marker, _value, e) => field.onChange(e)}
                          errorMessage={meta.touched ? meta.error : ''}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="max-w-sm">
                    <Field name="sender">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          label={'From Email'}
                          type="text"
                          marker="sender"
                          placeholder={'From email...'}
                          value={field.value}
                          id="sender"
                          name="sender"
                          onChange={(_marker, _value, e) => field.onChange(e)}
                          errorMessage={meta.touched ? meta.error : ''}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="max-w-sm">
                    <Field name="toDomain">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          label={'To Domain'}
                          type="text"
                          marker="toDomain"
                          placeholder={'To domain...'}
                          value={field.value}
                          id="toDomain"
                          name="toDomain"
                          onChange={(_marker, _value, e) => field.onChange(e)}
                          errorMessage={meta.touched ? meta.error : ''}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="max-w-sm">
                    <Field name="recipient">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          label={'To Email'}
                          type="text"
                          marker="recipient"
                          placeholder={'To email...'}
                          value={field.value}
                          id="recipient"
                          name="recipient"
                          onChange={(_marker, _value, e) => field.onChange(e)}
                          errorMessage={meta.touched ? meta.error : ''}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="max-w-sm">
                    <Field name="group">
                      {({ meta, field }: FieldProps) => (
                        <Select
                          label="Group"
                          marker="group"
                          options={getProviderGroupOptions()}
                          name="group"
                          placeholder="Select Group"
                          value={field.value}
                          onChange={(marker, { value }) => {
                            setFieldValue(marker, value);
                          }}
                          loading={providerIsLoading}
                          disabled={providerIsLoading}
                          errorMessage={meta.touched ? meta.error : ''}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="max-w-sm">
                    <Field name="dateRange">
                      {({ meta, field }: FieldProps) => (
                        <Select
                          label="Date Range"
                          marker="dateRange"
                          options={selectFieldOptions}
                          name="dateRange"
                          placeholder="Select Date Range"
                          value={field.value}
                          onChange={(marker, { value }) => {
                            setFieldValue(marker, value);
                          }}
                          errorMessage={meta.touched ? meta.error : ''}
                        />
                      )}
                    </Field>
                  </div>
                </div>

                <div className="grid grid-cols-2 ">
                  <div>
                    <h2 className="font-semibold text-lg uppercase mb-2">
                      Status
                    </h2>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.keys(
                        type === 'emailReports'
                          ? emailTrafficStatus
                          : notificationTrafficStatus,
                      ).map((status, index) => (
                        <Field key={`status`} name={`status`}>
                          {({ field }: FieldProps) => (
                            <Checkbox
                              key={`status-${index}`}
                              size="small"
                              label={status}
                              checked={field.value
                                ?.split('|')
                                ?.includes(status)}
                              onChange={(value) => {
                                value
                                  ? setFieldValue(
                                      `status`,
                                      `${field.value}|${status}`,
                                    )
                                  : setFieldValue(
                                      `status`,
                                      field.value.replace(`|${status}`, ''),
                                    );
                              }}
                            />
                          )}
                        </Field>
                      ))}
                    </div>
                  </div>
                  <div className=" flex flex-col justify-between">
                    {values.dateRange === TRAFFIC_DURATION.custom && (
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div>
                          <Field name="fromDuration">
                            {({ field, meta }: FieldProps) => (
                              <Input
                                label={'From'}
                                type="datetime-local"
                                className="mt-1"
                                marker="fromDuration"
                                value={field.value}
                                id="fromDuration"
                                name="fromDuration"
                                errorMessage={meta.touched ? meta.error : ''}
                                onChange={(_marker, _value) => {
                                  _value
                                    ? setFieldValue(
                                        'fromDuration',

                                        _value,
                                      )
                                    : setFieldValue('fromDuration', '');
                                }}
                              />
                            )}
                          </Field>
                        </div>
                        <div>
                          <Field name="toDuration">
                            {({ field, meta }: FieldProps) => (
                              <Input
                                label={'To'}
                                type="datetime-local"
                                className="mt-1"
                                marker="toDuration"
                                value={field.value}
                                id="toDuration"
                                name="toDuration"
                                errorMessage={meta.touched ? meta.error : ''}
                                onChange={(_marker, _value) => {
                                  _value
                                    ? setFieldValue(
                                        'toDuration',

                                        _value,
                                      )
                                    : setFieldValue('toDuration', '');
                                }}
                              />
                            )}
                          </Field>
                        </div>
                      </div>
                    )}
                    <Field key={`hasAttachment`} name={`hasAttachment`}>
                      {({ field }: FieldProps) => (
                        <Checkbox
                          size="small"
                          label={'Has Attachment'}
                          checked={field.value}
                          onChange={(value) => {
                            setFieldValue(`hasAttachment`, value);
                          }}
                        />
                      )}
                    </Field>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 justify-end items-center">
                    <Button
                      type="ghost"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      onClick={() => updateAdvanceFilterVisibility()}
                    >
                      Cancel
                    </Button>

                    <Button
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      icon={SearchIcon}
                      htmlType="submit"
                    >
                      Search
                    </Button>

                    {/* <Button
                    htmlType="reset"
                    type="ghost"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Reset
                  </Button> */}
                  </div>
                </div>
              </div>
            </Loader>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AdvanceFilters;
