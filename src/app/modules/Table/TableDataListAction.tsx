import React, { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { Button, JustifyContent } from '@app/components';
import SearchIcon from '@app/components/Icons/SearchIcon';
import { setSearchValue } from '@app/store/reducers/ui';
import PlusIcon from '@app/components/Icons/PlusIcon';
import PrintIcon from '@app/components/Icons/PrintIcon';
import UploadIcon from '@app/components/Icons/UploadIcon';
import { DFlex } from '@app/styled/flex.styled';
import { useDownloadableWithPayload } from '@app/helper/download.helper';


interface iTableDataListAction{
  children?:any;
  add?:boolean;
  importFile?:boolean;
  print?:boolean;
  filter?:boolean;
  showSearch?:boolean;
  btnAddText?:string;
  searchPlaceholder?:string;
  onClickImport?:any;
  onClickAdd?:any;
  onClickPrint?: any;
  path?: string;
  inline?: boolean;
}

export default function TableDataListAction({
  children,
  add = true,
  importFile = false,
  print = false,
  filter = false,
  showSearch = true,
  btnAddText = 'Tambah Data',
  searchPlaceholder = 'Cari...',
  onClickImport,
  onClickAdd,
  onClickPrint,
  path,
  inline = false,
}: iTableDataListAction) {
  
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const [loadingExport, setLoadingExport] = useState<any>('');
  const [search, setSearch] = useState<any>('');
  const [filterBar, setFilterBar] = useState<boolean>(false);
  const {downloadFile, isDownloadFileLoading} = useDownloadableWithPayload();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    debouncedSearchHandler(search);
  }, [search]);

  /** SEARCH HANDLER */
  const searchHandler = (value: any) => {
    dispatch(setSearchValue(value || ''));
  };

  const debouncedSearchHandler = useCallback(debounce(searchHandler, 500), []);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    searchParams.delete("page")
    searchParams.append("page", '1')
    
    setSearchParams(searchParams)
    setSearch(value);
  };

  const handleImportFile = (e: any) => {
    if (onClickImport) {
      onClickImport(e);
    } else {
      const target = typeof add == 'boolean' ? 'add' : add;
      navigate(target);
    }
  };

  const handleFilter = () => {
    if (filterBar) {
      setFilterBar(false);
    } else {
      setFilterBar(true);
    }
  };

  const handleAddClick = (e: any) => {
    if (onClickAdd) {
      onClickAdd(e);
    } else {
      const target = typeof add == 'boolean' ? 'add' : add;
      navigate(target);
    }
  };

  const handlePrint = (e: any) => {
    if(path){
      downloadFile(path)
    }
    else if (onClickPrint) {
      onClickPrint(e);
    }
  }
  

  return (
    <>
      <JustifyContent>
        <DFlex className='mb-3 gap-1'>
          {showSearch && (
            <InputGroup style={{ width: '18rem' }}>
              <InputGroup.Text id="search" className='bg-white'><SearchIcon /></InputGroup.Text>
              <FormControl
                placeholder={searchPlaceholder}
                aria-label={searchPlaceholder}
                className='inline-group bg-white ps-0'
                onChange={handleChangeSearch}
              />
            </InputGroup>
          )}
          {filter && !inline && (
            <Button variant='outline-warning' onClick={handleFilter} style={{ border: 0 }}>
              <i className="fas fa-filter"></i>
            </Button>
          )}
          {filter && inline && children}
        </DFlex>
        <div>
          {importFile && (
            <Button variant='outline-primary' onClick={handleImportFile} className='me-1'>
              <UploadIcon />
            </Button>
          )}
          {print && (
            <Button variant='secondary' onClick={handlePrint} className="mx-1" style={{color:'#fff'}} isLoading={isDownloadFileLoading}>
              <PrintIcon /> Cetak
            </Button>
          )}
          {add && (
            <Button variant='primary' className="ms-1" onClick={handleAddClick}>
              <PlusIcon /> {btnAddText}
            </Button>
          )}
        </div>
      </JustifyContent>
      { filterBar && !inline && children }
    </>
  );
}
