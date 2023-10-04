import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  Input,
  ISelectOption,
  Loader,
  Select,
  TextArea,
} from '../../components';
import { nseApi } from '../../services';
import {
  domainSelector,
  providerGroupsActions,
  providerGroupsSelector,
  useAppDispatch,
  useAppSelector,
} from '../../state';
import { SECONDARY_COLOR } from '../../utils/constants';
import VerifyDomain from '../VerifyDomain';
import ViewDnsAuths from '../ViewDnsAuths';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { isArray } from 'lodash';

interface IAddUpdateDomain {
  domainId?: string;
  updateDomainId?: (id: string) => void;
  closeModal?: () => void;
}

const AddUpdateDomain: React.FC<IAddUpdateDomain> = ({
  domainId = '',
  updateDomainId = () => null,
  closeModal = () => null,
}) => {
  const dispatch = useAppDispatch();

  const providerGroups = useAppSelector((state) =>
    providerGroupsSelector.selectAll(state),
  );

  const { isLoading } = useAppSelector((state) => state.domain);
  const domainData = useAppSelector((state) =>
    domainSelector.selectById(state, domainId),
  );

  //local state
  const [groupId, setGroupId] = useState('');

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
      setGroupId('');
    };
  }, []);

  const handleGroupUpdate = async (
    domainId: string,
    oldGroupId: string,
    newGroupId: string,
  ) => {
    // if (!oldGroupId || !newGroupId || oldGroupId === newGroupId) return; //fixme temporary requirement
    await dispatch(
      nseApi.endpoints.removeDomainFromGroup.initiate({
        groupId: oldGroupId,
        domainId,
      }),
    );
    await dispatch(
      nseApi.endpoints.addDomainToGroup.initiate({
        groupId: newGroupId,
        domainId,
      }),
    );
  };

  return (
    <Formik
      initialValues={{
        domain: domainData?.domain || '',
        group: domainData?.group?._id || groupId,
        comments: domainData?.comments || '',
      }}
      validationSchema={Yup.object().shape({
        domain: Yup.string().required('Domain is require'),
      })}
      onSubmit={async (data, { setSubmitting }) => {
        setSubmitting(true);
        if (domainId) {
          await handleGroupUpdate(
            domainId,
            domainData?.group?._id || '',
            data?.group,
          );
          dispatch(
            nseApi.endpoints.updateDomain.initiate({
              id: domainId,
              body: {
                domain: data?.domain,
                comments: data?.comments,
              },
            }),
          )
            .unwrap()
            .then(() => {
              toast.success(`Domain updated successfully`);
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
            nseApi.endpoints.createDomain.initiate({
              domain: data.domain,
              comments: data?.comments,
            }),
          )
            .unwrap()
            .then(async (res) => {
              toast.success(`Domain added successfully`);
              updateDomainId(res?.result._id);
              setGroupId(data?.group);
              await handleGroupUpdate(
                res?.result._id,
                domainData?.group?._id || '',
                data?.group,
              );
            })
            .catch((err) => {
              toast.error(
                isArray(err.data?.message)
                  ? err.data?.message[0]
                  : err.data?.message || `Something went wrong`,
              );
            })
            .finally(() => setSubmitting(false));
        }
      }}
      enableReinitialize={true}
    >
      {(formik) => {
        const { setFieldValue, isSubmitting } = formik;
        return (
          <Form>
            <div className="space-y-2">
              <div
                className={`w-full max-h-[70vh] ${
                  !domainId
                    ? 'overflow-visible'
                    : isLoading
                    ? 'overflow-hidden'
                    : 'overflow-y-auto slim-scroll px-1'
                } `}
              >
                <Loader
                  loading={isLoading || isSubmitting}
                  size={'small'}
                  color={SECONDARY_COLOR}
                >
                  <div className="flex space-x-3 justify-between">
                    <div className="w-1/2 space-y-2 flex flex-col">
                      <div className="w-full">
                        <Field name="domain">
                          {({ field, meta }: FieldProps) => (
                            <Input
                              type="text"
                              className="mt-0"
                              label="Domain"
                              marker="domain"
                              value={field.value}
                              id="domain"
                              name="domain"
                              required
                              disabled={domainId ? true : false}
                              errorMessage={meta.touched ? meta.error : ''}
                              onChange={(_marker, _value, e) =>
                                field.onChange(e)
                              }
                            />
                          )}
                        </Field>
                      </div>
                      <div className="w-full">
                        <Field name="group">
                          {({ meta, field }: FieldProps) => (
                            <Select
                              label="Group"
                              marker="group"
                              options={getProviderGroupOptions()}
                              name="group"
                              placeholder="Select Group"
                              value={field.value}
                              loading={isLoading}
                              onChange={(marker, { value }) => {
                                setFieldValue(marker, value);
                              }}
                              errorMessage={meta.touched ? meta.error : ''}
                            />
                          )}
                        </Field>
                      </div>
                    </div>
                    <div className="w-1/2 h-full">
                      <div className="w-full">
                        <Field name="comments">
                          {({ field, meta }: FieldProps) => (
                            <TextArea
                              className="mt-0 slim-scroll"
                              label="Notes"
                              marker="comments"
                              value={field.value}
                              id="comments"
                              name="comments"
                              rows={5}
                              maxLength={250}
                              errorMessage={meta.touched ? meta.error : ''}
                              onChange={(_marker, _value, e) =>
                                field.onChange(e)
                              }
                            />
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>
                  {domainId && (
                    <>
                      <div className="mt-7">
                        <VerifyDomain id={domainId} />
                      </div>
                      <div className="mt-7">
                        <ViewDnsAuths
                          domain={{
                            id: domainId || '',
                            domainName: domainData?.domain || '',
                          }}
                        />
                      </div>
                    </>
                  )}
                </Loader>
              </div>
              <div className="flex justify-end space-x-2 border-t pt-2">
                <Button type="ghost" onClick={closeModal}>
                  Cancel
                </Button>
                <Button
                  type="primary"
                  loading={isLoading || isSubmitting}
                  htmlType="submit"
                >
                  Save
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddUpdateDomain;
