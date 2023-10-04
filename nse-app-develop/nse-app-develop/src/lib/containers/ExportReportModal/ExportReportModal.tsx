import { CloudUploadIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Buffer } from 'buffer';
import { IFilter } from '../../types';
import { useAppDispatch, useAppSelector } from '../../state';
import { nseApi } from '../../services';
import { Button, Input, Modal } from '../../components';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { defaultFilter } from '../../../pages/Traffic';

interface IExportReportModal {
  type: 'emailReports' | 'notificationReports';
  search: string;
  filter: IFilter;
}

const ExportFileSchema = Yup.object().shape({
  fileName: Yup.string().required('Export file name is required'),
});

const ExportReportModal = ({
  type = 'emailReports',
  search = '',
  filter = defaultFilter,
}: IExportReportModal) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.emailReports);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const createAndDownloadFile = (data: number[], fileName: string) => {
    const buffer = new Buffer(data).toString();
    const blob = new Blob([buffer], { type: 'text/csv' });
    const link: HTMLAnchorElement = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.download = `${fileName || 'email-reports'}.csv`;
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <Button
        key="2"
        icon={CloudUploadIcon}
        loading={isLoading}
        disabled={isLoading}
        onClick={() => setIsModalOpen(true)}
      >
        Export Reports
      </Button>
      <Modal
        visible={isModalOpen}
        title="Set export file name"
        setVisible={setIsModalOpen}
        footer={false}
      >
        <Formik
          initialValues={{
            fileName: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);

            let fields = '';
            if (type === 'emailReports') {
              fields =
                'status,updatedAt,sender,recipient,subject,group,isNotified';
            } else {
              fields =
                'isNotified,notifiedAt,sender,recipient,subject,notificationFrom,notificationTo,status,group,bounceDetailShort,bounceDetailLong';
            }
            const exportSearchCsvDispatcher = () => {
              if (type === 'emailReports') {
                return dispatch(
                  nseApi.endpoints.exportSearchedEmailReports.initiate({
                    q: search,
                    fields,
                  }),
                );
              } else {
                return dispatch(
                  nseApi.endpoints.exportSearchedNotificationReports.initiate({
                    q: search,
                    fields,
                  }),
                );
              }
            };

            if (search?.replaceAll(' ', '')) {
              exportSearchCsvDispatcher()
                .unwrap()
                .then((res) => {
                  createAndDownloadFile(res?.data, values?.fileName);
                })
                .catch((err) => {
                  toast(
                    err.data?.message ||
                      'Something went wrong while fetching email providers. Please try again',
                    {
                      type: 'error',
                    },
                  );
                })
                .finally(() => {
                  setSubmitting(false);
                  setIsModalOpen(false);
                });
              return;
            }

            let status = '';
            if (filter?.status)
              status = filter.status.slice(
                ...(filter.status[0] === '|' ? [1] : []),
              );

            if (!filter?.status && type === 'notificationReports') {
              status = 'BOUNCE|DROPPED|FAILED|SPAM';
            }

            const payload = {
              ...(filter?.fromDuration && {
                fromDuration: filter.fromDuration,
              }),
              ...(filter?.toDuration && { toDuration: filter.toDuration }),
              options: {
                filter: {
                  ...(filter?.domain && { domain: filter?.domain }),
                  ...(filter?.sender && { sender: filter?.sender }),
                  ...(filter.toDomain &&
                    !filter.recipient && { toDomain: filter.toDomain }),
                  ...((filter.recipient || filter.toDomain) && {
                    recipient: filter.recipient,
                  }),
                  ...(filter?.group && { group: filter?.group }),
                  ...(status && {
                    status: status,
                  }),
                  ...(filter?.hasAttachment && { hasAttachment: true }),
                },
                fields,
              },
            };

            const exportFilterCsvDispatcher = () => {
              if (type === 'emailReports') {
                return dispatch(
                  nseApi.endpoints.exportEmailReportsToCsv.initiate({
                    ...payload,
                  }),
                );
              } else {
                return dispatch(
                  nseApi.endpoints.exportNotificationReportsToCsv.initiate({
                    ...payload,
                  }),
                );
              }
            };

            exportFilterCsvDispatcher()
              .unwrap()
              .then((res) => {
                createAndDownloadFile(res?.data, values?.fileName);
              })
              .catch((err) => {
                toast(
                  err?.data?.message ||
                    'Something went wrong. Please try after some time',
                  {
                    type: 'error',
                  },
                );
              })
              .finally(() => {
                setSubmitting(false);
                setIsModalOpen(false);
              });
          }}
          validationSchema={ExportFileSchema}
        >
          {(formik) => {
            const { values, isSubmitting } = formik;
            return (
              <Form>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Field name="fileName">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          marker="fileName"
                          label="Enter file name"
                          value={values.fileName}
                          name="fileName"
                          id="fileName"
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, event) => {
                            field.onChange(event);
                          }}
                          disabled={isSubmitting}
                          autoFocus={true}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="space-y-2 flex justify-end">
                    <Button
                      htmlType="submit"
                      disabled={!values.fileName || isLoading}
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
      </Modal>
    </>
  );
};

export default ExportReportModal;
