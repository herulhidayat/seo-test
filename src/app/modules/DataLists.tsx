import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

/** COMPONENTS */
import Pagination from '@app/components/Pagination/Pagination';

import { setLoading } from '@app/store/reducers/ui';

import {
  deleteByController,
  postByController,
} from '@app/services/main-v1.service';
import ModalConfirm from '@app/components/Modals/ModalConfirm';
import { get } from 'lodash';
import { notificationTemplate } from '@app/helper/notificationTemplate';
import { addNotification } from '@app/store/notification/notification.action';
import { deleteImage } from '@app/services/cdnUpload.service';

interface IDataLists {
  primaryKey?: string;
  children: any;
  respDataApi: any;
  selected?: any;
  action?: any;
  path: string;
  totalData?: string;
  dataResult?: string;
  filterParams?:any;
  title?: string | any;
  ids?: string;
  pathFieldImage?: any,
  endpoint?:
    | {
        getAll: '/get-all' | string;
        delete: '/delete' | string;
      }
    | any;
}

function DataLists({
  primaryKey = '_id',
  filterParams={},
  ids = 'id',
  path,
  children,
  respDataApi,
  selected,
  action,
  pathFieldImage = undefined,
  endpoint = { getAll: '/get-all', delete: '/delete' },
}: IDataLists) {
  const source = axios.CancelToken.source();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { callbackForm, searchValue } = useSelector((state: any) => state.ui);

  let [searchParams, setSearchParams] = useSearchParams();
  const [dataSelected, setDataSelected] = useState<any>(selected);

  const [modalConfirm, setModalConfirm] = useState<any>({
    show: false,
    approved: false,
    size: 'sm',
    icon: 'far fa-trash',
    description: `Delete this data?`,
    subDescriotion: `This action can't be undone`,
    textApproved: 'Delete',
    classApproved: 'danger',
    textDecline: 'Cancel',
  });

  const currentPage = searchParams.get('page') || 0;

  const [pagination, setPagination] = useState<any>({
    perPage: 24,
    offset: 0,
    currentPage: currentPage ? parseInt(currentPage) - 1 : 0,
    pageCount: 0,
    totalData: 0,
    marginPagesDisplayed: 2,
    pageRangeDisplayed: 7,
  });

  const callbackModalConfirm = (approved = false) => approved && deleteData();

  /** DELETE HANDLING */
  const deleteData = async () => {
    setLoading(true);

    try {
      await deleteByController(path + endpoint?.delete, dataSelected[primaryKey], source.token);
      if(pathFieldImage) deleteFiles()
      dispatchNotification(`Successfully deleted data`, 'success');
      getAllData();
    } catch (err: any) {
      setLoading(false);
      dispatchNotification(`Failed delete`, 'danger');
    }
  };

  const deleteFiles = async () => {
    try {
      let reqDeleteImage: any = pathFieldImage.map((f: any) => {
        if(get(dataSelected, f)){
          return deleteImage(get(dataSelected, f), source.token)
        }
      })
      axios.all(reqDeleteImage)
    } catch (err: any) {
      setLoading(false);
    }
  }

  /** READ PAGINATION AND FILTER CHANGE */
  useEffect(() => {
    if(callbackForm?.getData!==false) getAllData();
  }, [pagination?.currentPage, currentPage, callbackForm, searchValue]);

  useEffect(() => {
    return () => {
      source.cancel();
    };
  }, []);

  /** GET DATA PAGINATION */
  const getAllData = async () => {
    dispatch(setLoading(true));

    await new Promise((resolve) => setTimeout(resolve, 300));

    try {
      const params = {
        page: pagination.currentPage + 1,
        size: pagination.perPage,
        filter: {},
        order: 'DESC',
        orderBy: 'updatedAt',
        keyword: searchValue,
        ...filterParams
      };

      const req: any = await postByController(
        path + endpoint?.getAll,
        params,
        source.token
      );
      const total: number = req?.metaData?.pagination?.totalElements | 0;
      let data = req.data.map((d: any, i: number) => ({
        ...d,
        number: pagination.currentPage * pagination.perPage + (i + 1),
      }));

      respDataApi(data);
      setPagination((prevState: any) => ({
        ...prevState,
        pageCount: Math.ceil(total / pagination?.perPage),
        totalData: total,
      }));

      dispatch(setLoading(false));
    } catch (err: any) {
      dispatch(setLoading(false));
      respDataApi([]);
      setPagination((prevState: any) => ({
        ...prevState,
        pageCount: 0,
        totalData: 0,
      }));
    }
  };

  useEffect(() => {
    if (selected) {
      switch (action) {
        case 'delete':
          setDataSelected(selected);
          setModalConfirm((prevState: any) => ({
            ...prevState,
            show: true,
          }));
          break;
        case 'edit.modal':
          searchParams.delete(ids);
          searchParams.append(ids, get(selected, primaryKey));
          setSearchParams(searchParams);
          break;
        case 'edit':
          navigate(`edit/${get(selected, primaryKey)}`);
          break;
        case 'detail':
          navigate(`detail/${get(selected, primaryKey)}`);
          break;
        default:
          break;
      }
    }
  }, [action, selected]);

  /**
   * ! PAGINATION
   * @param e
   */
  const handlePaginationClick = (e: any) => {
    const selectedPage = e.selected;
    const offset = selectedPage * pagination.perPage;

    setPagination((prevState: any) => ({
      ...prevState,
      offset: offset,
      currentPage: selectedPage,
    }));
  };

  /** NOTIFICATION HANDLER */
  const dispatchNotification = (msg: string = '', type: string = '') => {
    const notification = notificationTemplate(msg, type);
    dispatch(addNotification({ ...notification, message: msg, type: type }));
  };

  return (
    <>
      {children}
      <Pagination
        pagination={pagination}
        forced={true}
        handlePaginationClick={handlePaginationClick}
      />

      <ModalConfirm
        modalConfirmProps={modalConfirm}
        callbackModalConfirm={callbackModalConfirm}
      />
    </>
  );
}

export default React.memo(DataLists);
