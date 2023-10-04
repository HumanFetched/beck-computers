import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon, FilterIcon } from '@heroicons/react/outline';
import { Button, Input, Toggle } from '../../components';
import { Field, FieldProps, Form, Formik } from 'formik';
import { nseApi } from '../../services';
import { useAppDispatch, useAppSelector } from '../../state';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { IFilter } from '../../types';

export const emailStatus: { [key: string]: string } = {
  SENT: 'SENT',
  QUEUED: 'QUEUED',
  DEFERRED: 'DEFERRED',
  DELIVERED: 'DELIVERED',
  BOUNCE: 'BOUNCE',
  FAILED: 'FAILED',
  DROPPED: 'DROPPED',
};

export interface IFormikFilters {
  fromDuration?: string;
  toDuration?: string;
  domain: string;
  sender: string;
  recipient: string;
  subject: string;
  status: { [key: string]: boolean };
}

interface IAdvanceFilters {
  setFilter: (filters: IFilter) => void;
}

const AdvanceFilters = ({ setFilter = () => null }: IAdvanceFilters) => {
  const dispatch = useAppDispatch();
  const { limit } = useAppSelector((state) => state.emailReports);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)} icon={FilterIcon}>
        Filter Reports
      </Button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Advance Filters
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 px-4 sm:px-6">
                          <Formik
                            initialValues={{
                              fromDuration: '',
                              toDuration: '',
                              domain: '',
                              sender: '',
                              recipient: '',
                              subject: '',
                              status: {},
                            }}
                            validationSchema={Yup.object().shape({
                              fromDuration: Yup.string().required(
                                'From Duration is require',
                              ),
                              toDuration: Yup.string().required(
                                'To Duration is require',
                              ),
                            })}
                            onSubmit={(
                              data: IFormikFilters,
                              { setSubmitting },
                            ) => {
                              const status: string[] = [];
                              Object.keys(data.status).map((s) => {
                                if (data.status[s]) status.push(s);
                              });
                              setFilter({
                                ...(data.domain && { domain: data.domain }),
                                ...(data.sender && { sender: data.sender }),
                                ...(data.recipient && {
                                  recipient: data.recipient,
                                }),
                                ...(data.subject && { subject: data.subject }),
                                ...(status.length && {
                                  status: status.join('|'),
                                }),
                                fromDuration: data.fromDuration || '',
                                toDuration: data.toDuration || '',
                              });
                              dispatch(
                                nseApi.endpoints.listEmailReports.initiate({
                                  page: 1,
                                  limit,
                                  fields:
                                    'domain,sender,recipient,subject,status,error,updatedAt',
                                  filter: {
                                    ...(data.domain && { domain: data.domain }),
                                    ...(data.sender && { sender: data.sender }),
                                    ...(data.recipient && {
                                      recipient: data.recipient,
                                    }),
                                    ...(data.subject && {
                                      subject: data.subject,
                                    }),
                                    ...(status.length && {
                                      status: status.join('|'),
                                    }),
                                  },
                                  fromDuration: data.fromDuration,
                                  toDuration: data.toDuration,
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
                                  setOpen(!open);
                                });
                            }}
                            enableReinitialize={true}
                          >
                            {(formik) => {
                              const {
                                handleSubmit,
                                setFieldValue,
                                isSubmitting,
                              } = formik;
                              return (
                                <Form>
                                  <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2 justify-start items-center">
                                      <Button
                                        loading={isSubmitting}
                                        disabled={isSubmitting}
                                        icon={FilterIcon}
                                        onClick={() => {
                                          handleSubmit();
                                        }}
                                      >
                                        Filter Reports
                                      </Button>

                                      <Button
                                        htmlType="reset"
                                        type="ghost"
                                        loading={isSubmitting}
                                        disabled={isSubmitting}
                                      >
                                        Reset
                                      </Button>
                                    </div>
                                    <div className="mt-2 grid grid-cols-2 gap-2 items-start">
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
                                              errorMessage={
                                                meta.touched ? meta.error : ''
                                              }
                                              onChange={(_marker, _value) => {
                                                _value
                                                  ? setFieldValue(
                                                      'fromDuration',

                                                      _value,
                                                    )
                                                  : setFieldValue(
                                                      'fromDuration',
                                                      '',
                                                    );
                                              }}
                                            />
                                          )}
                                        </Field>
                                      </div>
                                      <div className="cursor-pointer">
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
                                              errorMessage={
                                                meta.touched ? meta.error : ''
                                              }
                                              onChange={(_marker, _value) => {
                                                _value
                                                  ? setFieldValue(
                                                      'toDuration',

                                                      _value,
                                                    )
                                                  : setFieldValue(
                                                      'toDuration',
                                                      '',
                                                    );
                                              }}
                                            />
                                          )}
                                        </Field>
                                      </div>
                                    </div>
                                    <Field name="domain">
                                      {({ field }: FieldProps) => (
                                        <Input
                                          label={'Domain'}
                                          type="text"
                                          className="mt-1 w-96"
                                          marker="domain"
                                          placeholder={'Domain...'}
                                          value={field.value}
                                          id="domain"
                                          name="domain"
                                          onChange={(_marker, _value, e) =>
                                            field.onChange(e)
                                          }
                                        />
                                      )}
                                    </Field>
                                    <Field name="sender">
                                      {({ field }: FieldProps) => (
                                        <Input
                                          label={'Sender'}
                                          type="text"
                                          className="mt-1 w-96"
                                          marker="sender"
                                          placeholder={'Sender...'}
                                          value={field.value}
                                          id="sender"
                                          name="sender"
                                          onChange={(_marker, _value, e) =>
                                            field.onChange(e)
                                          }
                                        />
                                      )}
                                    </Field>
                                    <Field name="recipient">
                                      {({ field }: FieldProps) => (
                                        <Input
                                          label={'Recipient'}
                                          type="text"
                                          className="mt-1 w-96"
                                          marker="recipient"
                                          placeholder={'Recipient...'}
                                          value={field.value}
                                          id="recipient"
                                          name="recipient"
                                          onChange={(_marker, _value, e) =>
                                            field.onChange(e)
                                          }
                                        />
                                      )}
                                    </Field>
                                    <Field name="subject">
                                      {({ field }: FieldProps) => (
                                        <Input
                                          label={'Subject'}
                                          type="text"
                                          className="mt-1 w-96"
                                          marker="subject"
                                          placeholder={'Subject...'}
                                          value={field.value}
                                          id="subject"
                                          name="subject"
                                          onChange={(_marker, _value, e) =>
                                            field.onChange(e)
                                          }
                                        />
                                      )}
                                    </Field>
                                    <div className="grid grid-cols-2 gap-2">
                                      {Object.keys(emailStatus).map(
                                        (status) => (
                                          <Field
                                            key={`status.${status}`}
                                            name={`status.${status}`}
                                          >
                                            {({ field }: FieldProps) => (
                                              <Toggle
                                                label={status}
                                                checked={field.value}
                                                onChange={(value) =>
                                                  setFieldValue(
                                                    `status.${status}`,
                                                    value,
                                                  )
                                                }
                                              />
                                            )}
                                          </Field>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                </Form>
                              );
                            }}
                          </Formik>
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AdvanceFilters;
