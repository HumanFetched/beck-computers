import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React, { useState, useEffect } from 'react';
import { usePaginationRange, DOTS } from '../../hooks';

/* eslint-disable-next-line */
export interface PaginationProps {
  total: number;
  pageSize?: number;
  current?: number;
  defaultCurrent?: number;
  disabled?: boolean;
  siblingCount?: number;
  showResultText?: boolean;
  onChange?: (page: number, pageSize: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  total = 1,
  pageSize = 1,
  current = 1,
  disabled,
  siblingCount = 1,
  showResultText = true,
  onChange = () => null,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(current);

  const paginationRange = usePaginationRange({
    current: currentPage,
    total,
    siblingCount,
    pageSize,
  });

  useEffect(() => {
    setCurrentPage(current);
  }, [current]);

  const lastPage = paginationRange[paginationRange.length - 1];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const handlePageChange = (current: number, pageSize: number) => {
    setCurrentPage(current);
    onChange(current, pageSize);
  };

  const onNext = () => {
    const current = currentPage + 1;
    if (current > lastPage) {
      handlePageChange(+lastPage, pageSize);
      return;
    }
    handlePageChange(current, pageSize);
  };

  const onPrevious = () => {
    const current = currentPage - 1;
    handlePageChange(current, pageSize);
  };

  const getFromPage = (currentPage: number, pageSize: number) => {
    return (currentPage - 1) * pageSize + 1;
  };

  const getToPage = (currentPage: number, pageSize: number, total: number) => {
    const toItem = (currentPage - 1) * pageSize + pageSize;
    if (toItem > total) return total;
    else return toItem;
  };

  return (
    <div className="px-4 py-3 flex items-center justify-between sm:px-6 select-none">
      <div className="flex-1 flex justify-between sm:hidden">
        <div
          className={`${
            currentPage === 1 &&
            'opacity-50 select-none pointer-events-none cursor-not-allowed'
          } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
          onClick={() => onPrevious()}
        >
          Previous
        </div>
        <div
          aria-current="page"
          className={`z-10 bg-primary-50 border-primary-600 text-primary-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer`}
        >
          {currentPage}
        </div>
        <div
          className={`${
            currentPage === lastPage &&
            'opacity-50 select-none pointer-events-none cursor-not-allowed'
          } ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
          onClick={() => onNext()}
        >
          Next
        </div>
      </div>
      <div
        className={`hidden sm:flex-1 sm:flex sm:items-center sm:justify-between ${
          disabled && 'opacity-50 select-none pointer-events-none'
        }`}
      >
        {showResultText ? (
          <div>
            <p className="text-sm text-gray-700">
              Showing{' '}
              <span className="font-medium">
                {getFromPage(currentPage, pageSize)}
              </span>{' '}
              to{' '}
              <span className="font-medium">
                {getToPage(currentPage, pageSize, total)}
              </span>{' '}
              of <span className="font-medium">{total}</span> results
            </p>
          </div>
        ) : (
          <div></div>
        )}
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <div className="cursor-not-allowed">
              <div
                className={`${
                  currentPage === 1 &&
                  'opacity-50 select-none pointer-events-none'
                } relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer`}
                onClick={onPrevious}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
            {/* Current: "z-10 bg-primary-50 border-primary-600 text-primary-700", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {/* {getPagesList(total, pageSize).map((page, index) => (
                            <div
                                key={index}
                                aria-current="page"
                                className={`${current === page ? 'z-10 bg-primary-50 border-primary-600 text-primary-700' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'} relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer`}
                                onClick={() => handlePageChange(page, pageSize)}
                            >
                                {page}
                            </div>
                        ))} */}
            {paginationRange.map((pageNumber, index) => {
              if (pageNumber === DOTS) {
                return (
                  <div
                    key={index}
                    aria-current="page"
                    className={`bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer select-none pointer-events-none`}
                  >
                    {DOTS}
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  aria-current="page"
                  className={`${
                    currentPage === pageNumber
                      ? 'z-10 bg-primary-50 border-primary-600 text-primary-700'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  } relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer`}
                  onClick={() => {
                    handlePageChange(+pageNumber, pageSize);
                  }}
                >
                  {+pageNumber}
                </div>
              );
            })}
            <div className="cursor-not-allowed">
              <div
                className={`${
                  currentPage === lastPage &&
                  'opacity-50 select-none pointer-events-none'
                } relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer`}
                onClick={onNext}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
