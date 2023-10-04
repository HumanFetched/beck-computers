import React, { useState } from 'react';
import { MenuIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { DraggableStateSnapshot, DraggableProvided } from 'react-beautiful-dnd';
import { IEmailProvider, IProvider } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../state';
import { nseApi } from '../../../services';
import { toast } from 'react-toastify';
import { Modal, Popconfirm, Toggle } from '../../../components';
import AddProvider from '../../AddProvider';

/* eslint-disable-next-line */
export interface ListItemProps {
  item: IProvider;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  id: string;
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  item,
  provided,
  snapshot,
}) => {
  const { isProvidersLoading } = useAppSelector((state) => state.groupConfig);

  const dispatch = useAppDispatch();

  const [isUpdateProviderModalVisible, setIsUpdateProviderModalVisible] =
    useState(false);

  const removeProvidersFromGroup = (provider: string) => {
    dispatch(
      nseApi.endpoints.removeProviderFromGroup.initiate({
        groupId: id,
        provider,
      }),
    )
      .unwrap()
      .then(() => {
        toast('Remove successfully', {
          type: 'success',
        });
      })
      .catch((err) => {
        toast(err.data?.message || 'Something went wrong. Please try again', {
          type: 'error',
        });
      });
  };

  const updateStatus = (status: boolean, id: string) => {
    dispatch(
      nseApi.endpoints.updateProviderDetails.initiate({
        id,
        body: {
          isActive: status,
          connectionType: item.connectionType,
          apiDetails: item.apiDetails || undefined,
          smtpDetails: item.smtpDetails || undefined,
        },
      }),
    );
  };

  return (
    <>
      <div
        className="w-full bg-white grid grid-cols-6 gap-2 py-2 border-b-2 border-gray-200 items-center"
        ref={provided.innerRef}
        data-snapshot={snapshot}
        {...provided.draggableProps}
      >
        <div className="" {...provided.dragHandleProps}>
          <MenuIcon className="h-8 mx-4 cursor-move text-gray-500" />
        </div>
        <div className="text-gray-900">
          {(item.provider as IEmailProvider)?.name}
        </div>
        <div className="text-gray-900">
          <Toggle
            checked={item.isActive}
            onChange={(status) => updateStatus(status, item._id)}
          />
        </div>
        <div className="text-gray-900">
          {item.configuration?.dailyMailLimit || 1}
        </div>
        <div className="text-gray-900">
          {item.configuration?.monthlyMailLimit || 1}
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <PencilAltIcon
            className="w-5 h-5 text-primary cursor-pointer"
            onClick={() => {
              setIsUpdateProviderModalVisible(true);
            }}
          />
          <span>|</span>
          <Popconfirm
            title="Sure want to delete provider from this group ?"
            onConfirm={() => removeProvidersFromGroup(item._id)}
          >
            <TrashIcon className="w-5 h-5 text-primary cursor-pointer" />
          </Popconfirm>
        </div>
      </div>
      <Modal
        visible={isUpdateProviderModalVisible}
        setVisible={(status) => {
          setIsUpdateProviderModalVisible(status);
        }}
        footer={false}
        widthClass="max-w-2xl"
        centered
      >
        <AddProvider
          emailProviderId={(item.provider as IEmailProvider)?._id}
          providerId={item._id}
          loading={isProvidersLoading}
          onProviderUpdate={() => setIsUpdateProviderModalVisible(false)}
          mode="UPDATE"
        />
      </Modal>
    </>
  );
};

export default ListItem;
