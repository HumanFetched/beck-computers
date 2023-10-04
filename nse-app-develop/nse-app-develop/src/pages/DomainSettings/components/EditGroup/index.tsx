import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  Input,
  ITableRenderProps,
  Pagination,
  Table,
} from '../../../../lib/components';
import { nseApi } from '../../../../lib/services';
import {
  providerGroupsActions,
  providerGroupsSelector,
  useAppDispatch,
  useAppSelector,
} from '../../../../lib/state';
import { IListingConfig, IProviderGroup } from '../../../../lib/types';
import * as Yup from 'yup';
import { usePagination } from '../../../../lib/hooks';

interface IEditGroup {
  groupId: string;
  domainId: string;
  onProviderGroupAddOrUpdate: () => void;
  onProviderGroupCancel: () => void;
}

const EditGroup: React.FC<IEditGroup> = ({
  groupId,
  domainId,
  onProviderGroupAddOrUpdate = () => null,
  onProviderGroupCancel = () => null,
}) => {
  const dispatch = useAppDispatch();
  const providerGroups = useAppSelector((state) =>
    providerGroupsSelector.selectAll(state),
  );

  const {
    isLoading: isProviderGroupsLoading,
    limit,
    totalDocs,
    page,
  } = useAppSelector((state) => state.providerGroups);

  const [listingConfig, setListingConfig] = useState<IListingConfig>({
    type: 'list',
    searchQuery: '',
  });

  const listProviderGroups = () => {
    dispatch(
      nseApi.endpoints.listProviderGroups.initiate({
        page: currentPage,
        limit: 5,
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

  const searchProviderGroups = async (searchQuery: string) => {
    dispatch(
      nseApi.endpoints.searchProviderGroup.initiate({
        page: currentPage,
        limit: 5,
        q: searchQuery,
      }),
    );
  };

  const getProviderGroups = () => {
    if (listingConfig.type === 'list') {
      listProviderGroups();
    } else {
      searchProviderGroups(listingConfig.searchQuery);
    }
  };

  const { currentPage, setCurrentPage } = usePagination(
    page,
    providerGroups?.length,
    getProviderGroups,
    { syncToURLParam: false },
  );

  const groupData = (groups: IProviderGroup[]) => {
    if (!groups) return [];
    if (groups.length) {
      return groups.map((group) => {
        return {
          _id: group._id,
          name: group.name,
          domain: group.domain,
        };
      });
    } else return [];
  };

  useEffect(() => {
    return () => {
      dispatch(providerGroupsActions.reset());
    };
  }, []);

  const searchGroupSchema = Yup.object().shape({
    group: Yup.string().required('Group name is required'),
  });

  return (
    <div>
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <Formik
            initialValues={{
              group: '',
            }}
            validationSchema={searchGroupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setListingConfig({
                type: 'search',
                searchQuery: values?.group,
              });
              setSubmitting(true);
              searchProviderGroups(values?.group).finally(() => {
                setSubmitting(false);
              });
            }}
          >
            {(formik) => {
              const { isSubmitting, resetForm } = formik;
              return (
                <Form className="w-full">
                  <div className="w-full flex items-start space-x-2 ">
                    <div className="flex-grow">
                      <Field name="group">
                        {({ field, meta }: FieldProps) => (
                          <Input
                            value={field.value}
                            marker="group"
                            name="group"
                            id="group"
                            errorMessage={meta.touched ? meta.error : ''}
                            onChange={(marker, value, e) => {
                              field.onChange(e);
                            }}
                            autoFocus
                            allowClear={!meta.error && field.value}
                            handleClear={() => {
                              resetForm();
                              setListingConfig({
                                type: 'list',
                                searchQuery: '',
                              });
                              listProviderGroups();
                            }}
                          />
                        )}
                      </Field>
                    </div>

                    <div className="w-1/6">
                      <Button
                        htmlType="submit"
                        type="primary"
                        block
                        loading={isSubmitting}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{
            group: groupId,
          }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            const newGroupId = values.group;
            if (newGroupId === groupId) return onProviderGroupAddOrUpdate();
            if (groupId)
              await dispatch(
                nseApi.endpoints.removeDomainFromGroup.initiate({
                  groupId,
                  domainId,
                }),
              );
            await dispatch(
              nseApi.endpoints.addDomainToGroup.initiate({
                groupId: newGroupId,
                domainId,
              }),
            ).finally(() => {
              onProviderGroupAddOrUpdate();
            });
          }}
        >
          {(formik) => {
            const { isSubmitting } = formik;
            return (
              <Form className="w-full">
                {isSubmitting}
                <Table
                  columns={[
                    {
                      title: 'Groups',
                      dataIndex: 'name',
                      key: 'name',
                      render: ({
                        record,
                      }: ITableRenderProps<IProviderGroup>) => {
                        return (
                          <div className="text-secondary mr-5">
                            <div className="flex items-center">
                              <Field
                                type="radio"
                                name="group"
                                value={record._id}
                                className="peer-checked:bg-none focus:ring-transparent peer-checked:bg:primary focus:ring-offset-0  text-primary-600 border-gray-300 cursor-pointer bg-transparent"
                              />
                              <p className="ml-2">{record.name}</p>
                            </div>
                          </div>
                        );
                      },
                    },
                  ]}
                  dataSource={groupData(providerGroups)}
                  loading={isProviderGroupsLoading}
                />
                {providerGroups?.length ? (
                  <Pagination
                    disabled={isProviderGroupsLoading}
                    total={totalDocs}
                    current={currentPage}
                    pageSize={limit}
                    onChange={(page) => setCurrentPage(page)}
                  />
                ) : (
                  ''
                )}
                <div>
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button
                      type="ghost"
                      onClick={() => onProviderGroupCancel()}
                      disabled={isProviderGroupsLoading}
                    >
                      Cancel
                    </Button>
                    <Button
                      htmlType="submit"
                      type="primary"
                      disabled={isProviderGroupsLoading || isSubmitting}
                      loading={isSubmitting}
                    >
                      Select
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default EditGroup;
