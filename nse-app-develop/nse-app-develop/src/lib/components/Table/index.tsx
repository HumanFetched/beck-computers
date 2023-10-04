import React, { MouseEvent, useEffect, useState } from 'react';
import { Loader } from '../Loader';
import { SECONDARY_COLOR } from '../../utils/constants';
import Tooltip from '../Tooltip';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';
import './table.css';

/* eslint-disable-next-line */
export type TableSizeType = 'small' | 'default' | 'large';

export interface ITableRenderProps<T> {
  record: T;
  text: string;
  index: string | number;
}

export interface ITableRowClick {
  event: MouseEvent<HTMLTableRowElement>;
  record: Record<string, number>;
  index: string | number;
}

export interface ITableColumn {
  title: string;
  dataIndex: string | number;
  key: string | number;
  align?: 'left' | 'right' | 'center';
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  width?: string | number;
  tooltip?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: ({ record }: ITableRenderProps<any>) => React.ReactNode;
}

export interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: Record<string, any>[]; //FIXME
  columns: ITableColumn[];
  bordered?: boolean;
  loading?: boolean;
  showHeader?: boolean;
  size?: TableSizeType;
  noDataText?: string;
  isResizable?: boolean;
  onRowClick?: ({ event, record, index }: ITableRowClick) => void;
  onDoubleClick?: ({ event, record, index }: ITableRowClick) => void;
  onMouseEnter?: ({ event, record, index }: ITableRowClick) => void;
  onMouseLeave?: ({ event, record, index }: ITableRowClick) => void;
}

const getColumnWidth = (width: string | number) => {
  if (typeof width === 'number') {
    return `${width}%`;
  }
  return width;
};

const getBorder = (bordered: boolean) => {
  if (bordered) return `border-2 border-gray-100`;
  return `border-t-2 border-b-2 border-gray-100`;
};

const getRowSize = (size: TableSizeType) => {
  switch (size) {
    case 'small':
      return `px-3 py-1 text-xs h-10`;
    case 'default':
      return `px-3 py-2 text-sm h-12`;
    case 'large':
      return `px-3 py-4 text-md h-14`;
    default:
      return `px-3 py-2 text-sm h-12`;
  }
};

export const Table: React.FC<TableProps> = ({
  dataSource = [],
  columns = [],
  bordered = false,
  loading = false,
  showHeader = true,
  size = 'default',
  noDataText = 'No Data Found',
  isResizable = false,
  onRowClick = () => null,
  onDoubleClick = () => null,
  onMouseEnter = () => null,
  onMouseLeave = () => null,
}) => {
  const [columnWidths, setColumnWidths] = useState<number[]>([]);

  useEffect(() => {
    const table = document.getElementById('table');
    if (table) {
      const tabelWidth = table.clientWidth;
      setColumnWidths([
        ...columns.map((c: ITableColumn) => {
          if (c.width) {
            return (tabelWidth * +c.width) / 100 - 10;
          }
          return tabelWidth / columns.length - 10;
        }),
      ]);
    }
  }, []);

  const handleResize = (index: number, width: number) => {
    const table = document.getElementById('table');
    if (table) {
      const newWidths = [...columnWidths];
      newWidths[index] = width;
      setColumnWidths(newWidths);
    }
  };

  return (
    <Loader loading={loading} size="small" color={SECONDARY_COLOR}>
      <div className="w-full overflow-x-auto slim-scroll">
        <table
          id="table"
          className="w-full table-fixed divide-y divide-gray-200"
        >
          {showHeader && (
            <thead className="bg-gray-50">
              <tr className={`border-b-2 border-gray-100`}>
                {columns &&
                  columns.map((column, index) => {
                    return (
                      <>
                        {isResizable ? (
                          <Resizable
                            key={index}
                            width={columnWidths[index] || 20}
                            height={0}
                            handle={<div className="resize-handle" />}
                            onResize={(e, { size }) =>
                              handleResize(index, size.width)
                            }
                          >
                            <th
                              key={index}
                              align={column.align ?? 'left'}
                              scope="col"
                              colSpan={column.colSpan}
                              rowSpan={column.rowSpan}
                              className={`${getRowSize(
                                size,
                              )} font-medium text-gray-500  tracking-wider ${
                                column.className
                              } ${getBorder(bordered)}`}
                              // style={{
                              //   width: getColumnWidth(
                              //     column.width || 100 / columns.length,
                              //   ),
                              // }}
                              style={{ width: `${columnWidths[index]}px` }}
                            >
                              {column.title}
                            </th>
                          </Resizable>
                        ) : (
                          <th
                            key={index}
                            align={column.align ?? 'left'}
                            scope="col"
                            colSpan={column.colSpan}
                            rowSpan={column.rowSpan}
                            className={`${getRowSize(
                              size,
                            )} font-medium text-gray-500  tracking-wider ${
                              column.className
                            } ${getBorder(bordered)}`}
                            style={{
                              width: getColumnWidth(
                                column.width || 100 / columns.length,
                              ),
                            }}
                            // style={{ width: `${columnWidths[index]}px` }}
                          >
                            {column.title}
                          </th>
                        )}
                      </>
                    );
                  })}
              </tr>
            </thead>
          )}
          <tbody className="overflow-auto">
            {(!dataSource || dataSource.length <= 0) && (
              <tr>
                <td colSpan={columns.length}>
                  <p className="text-center w-full text-sm text-gray-500 py-4">
                    {noDataText}
                  </p>
                </td>
              </tr>
            )}
            {dataSource &&
              dataSource.map((row, index) => {
                return (
                  <tr
                    key={index}
                    className={`bg-white`}
                    onClick={(e: MouseEvent<HTMLTableRowElement>) => {
                      if (onRowClick && typeof onRowClick === 'function') {
                        onRowClick({ event: e, record: row, index });
                      }
                    }}
                    onDoubleClick={(e: MouseEvent<HTMLTableRowElement>) => {
                      if (
                        onDoubleClick &&
                        typeof onDoubleClick === 'function'
                      ) {
                        onDoubleClick({ event: e, record: row, index });
                      }
                    }}
                    onMouseEnter={(e: MouseEvent<HTMLTableRowElement>) => {
                      if (onMouseEnter && typeof onMouseEnter === 'function') {
                        onMouseEnter({ event: e, record: row, index });
                      }
                    }}
                    onMouseLeave={(e: MouseEvent<HTMLTableRowElement>) => {
                      if (onMouseLeave && typeof onMouseLeave === 'function') {
                        onMouseLeave({ event: e, record: row, index });
                      }
                    }}
                  >
                    {columns &&
                      columns.map((column, colIndex) => {
                        return (
                          <td
                            colSpan={column.colSpan}
                            rowSpan={column.rowSpan}
                            align={column.align ?? 'left'}
                            key={
                              column.dataIndex ||
                              column.key ||
                              `nex-${index}-${colIndex}`
                            }
                            className={`${getRowSize(
                              size,
                            )} text-gray-500  ${getBorder(bordered)} ${
                              column.className
                            }`}
                            style={{
                              overflow: 'hidden',
                              width: getColumnWidth(
                                column.width || 100 / columns.length,
                              ),
                            }}
                          >
                            {column.render ? (
                              <span
                                className={`${column?.tooltip && 'truncate'}`}
                              >
                                {column?.tooltip &&
                                row[column.key] &&
                                row[column.key]?.length > 10 ? (
                                  <Tooltip title={row[column.key]}>
                                    {column.render({
                                      record: row,
                                      text: row[column.key],
                                      index: index,
                                    })}
                                  </Tooltip>
                                ) : (
                                  <>
                                    {column.render({
                                      record: row,
                                      text: row[column.key],
                                      index: index,
                                    })}
                                  </>
                                )}
                              </span>
                            ) : (
                              <span className="truncate ">
                                {row[column.key]}
                              </span>
                            )}
                          </td>
                        );
                      })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Loader>
  );
};

export default Table;
