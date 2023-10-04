import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableLocation,
} from 'react-beautiful-dnd';
import { Loader } from '../../components';
import {
  providerGroupConfigActions,
  useAppDispatch,
  useAppSelector,
} from '../../state';
import { SECONDARY_COLOR } from '../../utils/constants';
import ListItem from './ListItem';

interface IProvidersDraggableTable {
  id: string;
}

const ProvidersDraggableTable: React.FC<IProvidersDraggableTable> = ({
  id,
}) => {
  const { isProvidersLoading, group } = useAppSelector(
    (state) => state.groupConfig,
  );

  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    const newItems = Array.from(group.providers);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(
      (result.destination as DraggableLocation).index,
      0,
      removed,
    );
    dispatch(providerGroupConfigActions.updateProviderReducer(newItems));
  };

  return (
    <Loader loading={isProvidersLoading} color={SECONDARY_COLOR}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="mt-2 rounded-md border border-gray-300"
            >
              <div className="grid grid-cols-6 gap-2 rounded-md bg-gray-100 border-b border-gray-300">
                <div className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 text-gray-500">
                  REORDER
                </div>
                <div className=" py-3.5 text-left text-sm font-semibold text-gray-500">
                  SMTP PROVIDER
                </div>
                <div className=" py-3.5 text-left text-sm font-semibold text-gray-500">
                  STATUS
                </div>
                <div className=" py-3.5 text-left text-sm font-semibold text-gray-500">
                  Daily Limit
                </div>
                <div className=" py-3.5 text-left text-sm font-semibold text-gray-500">
                  Monthly Limit
                </div>
                <div className=" py-3.5 text-left text-sm font-semibold text-gray-500">
                  ACTION
                </div>
              </div>
              {group?.providers?.map((item, index) => (
                <Draggable key={item._id} draggableId={item._id} index={index}>
                  {(provided, snapshot) => (
                    <ListItem
                      provided={provided}
                      snapshot={snapshot}
                      item={item}
                      id={id}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <div>
                {group?.providers?.length < 1 && (
                  <div className="py-2 text-center text-gray-600 text-sm">
                    No providers added to group
                  </div>
                )}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Loader>
  );
};

export default ProvidersDraggableTable;
