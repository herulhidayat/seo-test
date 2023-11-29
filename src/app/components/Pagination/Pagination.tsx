import React, { FC, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setActivePaging, setPagingLimit } from '@app/store/reducers/ui';
import { formatThousand } from '@app/helper/number.helper';
import { DFlex } from '@app/styled/flex.styled';
import SelectStatic from '../Select/SelectStatic';
import { useForm } from 'react-hook-form';
import { OPTION_PAGING_LIMIT } from '@app/config/options.config';

type Props = {
  pagination: any;
  handlePaginationClick: (e: any) => void;
  suffixTotal?: string;
  forced?: boolean;
  pageRangeDisplayed?: number;
  infoData?: "full"|"simple";
  showTotalData?: boolean;
};

const Pagination: FC<Props> = ({
  pagination,
  handlePaginationClick,
  suffixTotal = 'Total data',
  forced = false,
  pageRangeDisplayed=0,
  infoData="full",
  showTotalData=false
}) => {
  const dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams();

  const {watch, control} = useForm()
  const { pagingLimit } = useSelector((state: any) => state.ui)
  
  const onClickPageLink = (v:any)=>{
    handlePaginationClick(v)
    if (forced) {
      searchParams.delete("page")
      searchParams.append("page", v?.selected + 1)
      setSearchParams(searchParams)
    }
    dispatch(setActivePaging(v?.selected + 1))
  }

  useEffect(() => {
    if (watch("pagingLimit")) {
      dispatch(setPagingLimit(watch("pagingLimit")))
    }
  }, [watch("pagingLimit")])

  return (
    <>
      {pagination?.totalData > 0 && (
        <section className='animate__animated animate__fadeIn mt-3'>
          <div className='pagination-container d-flex justify-content-between align-items-center'>
            <DFlex className='align-items-center'>
              <SelectStatic 
                options={OPTION_PAGING_LIMIT()} 
                control={control}
                errors=""
                fieldName="pagingLimit"
                additionalOptions={{ menuPlacement: "auto" }} 
                defaultValue={pagingLimit}
              />
              <div className='text-muted d-none d-sm-block ms-2'>
                {
                  infoData == "full" ? <>Hal {(pagination?.currentPage + 1)} dari {formatThousand(pagination?.pageCount)} {
                    showTotalData && <> | {formatThousand(pagination?.totalData)} {suffixTotal}</>
                  }</> : <>{formatThousand(pagination?.totalData)} {suffixTotal}</>
                }
              </div>
            </DFlex>
            <div className='d-flex justify-content-end'>
              <ReactPaginate
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousLabel={'Prev'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me px-2'}
                pageCount={pagination.pageCount}
                marginPagesDisplayed={pagination.marginPagesDisplayed}
                pageRangeDisplayed={pageRangeDisplayed}
                forcePage={pagination?.currentPage} /** forced ? pagination?.currentPage : 0 */
                onPageChange={onClickPageLink}
                containerClassName={'pagination react-paginate'}
                activeClassName={'active'}
              />
            </div>
           
          </div>
        </section>
      )}
    </>
  );
};

export default Pagination;
