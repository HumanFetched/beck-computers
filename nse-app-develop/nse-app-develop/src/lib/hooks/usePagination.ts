import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../utils/helper';

interface IOptions {
  syncToURLParam?: boolean;
}
export const usePagination = (
  curPage: number,
  listLength: number,
  attachApi: () => void,
  options?: IOptions,
) => {
  const navigate = useNavigate();
  const query = useQuery();

  const syncToURLParam =
    options?.syncToURLParam === undefined || options?.syncToURLParam === true
      ? true
      : false;

  const queryPageNumber = syncToURLParam ? Number(query.get('page')) : null;

  const [currentPage, setCurrentPage] = useState(
    queryPageNumber || curPage || 1,
  );

  const onRecordAdd = () => {
    curPage === 1 ? attachApi() : setCurrentPage(1);
  };

  const onRecordDelete = () => {
    if (!listLength) return;
    if (listLength === 1) {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
      if (currentPage === 1) attachApi();
    } else {
      attachApi();
    }
  };

  const onRecordRefetch = () => {
    attachApi();
  };
  useEffect(() => {
    if (
      queryPageNumber !== currentPage &&
      typeof queryPageNumber === 'number'
    ) {
      setCurrentPage((s) => queryPageNumber || s);
    }
  }, [queryPageNumber]);

  useEffect(() => {
    if (
      queryPageNumber !== currentPage &&
      typeof queryPageNumber === 'number'
    ) {
      navigate({ search: `?page=${currentPage}` });
    }
    attachApi();
  }, [currentPage]);

  return {
    currentPage,
    setCurrentPage,
    onRecordAdd,
    onRecordDelete,
    onRecordRefetch,
  };
};
