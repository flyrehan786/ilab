import React from 'react';
import { Table } from 'antd';
import CommonBtn from '../CommonBtn';
import SearchIcon from '../../../assets/svgs/search.svg?react';

export default function CommonTable({
  tableTitle,
  tableDesc,
  columns,
  data,
  size,
  className,
  isLoading,
  onRow,
  filter = false,
  search = false,
  onPageChange = () => {},
  totalCount,
  pageSize = 10,
  setPage = () => {},
  btnHandler = () => {},
  btnName = '',
}) {
  return (
    <div className={`bgShadow mt-2 ${className}`}>
      <header className='flex items-center justify-between bg-white px-[16px] py-4 border-b border-border-gray rounded-t-xl'>
        <div className=''>
          <h1 className='primary-heading'>{tableTitle}</h1>
          <span className='primary-span'>{tableDesc}</span>
        </div>
        {btnName && <CommonBtn className={'primary-btn font-cairo text-[14px] py-4'} onClick={btnHandler} text={btnName} />}
        {(filter || search) && (
          <div className='custom-select flex gap-4  justify-between items-center'>
            {search && <Input type='text' className='h-9 rounded-sm ' name={'search'} placeholder='Search here' suffix={<SearchIcon />} />}
          </div>
        )}
      </header>
      <Table
        columns={columns}
        dataSource={data}
        size={size}
        loading={isLoading}
        onRow={onRow}
        pagination={{
          total: totalCount,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            console.log(page);
            setPage(page);
            onPageChange(page);
          },
        }}
      />
    </div>
  );
}
