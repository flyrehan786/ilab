import React from 'react';
import BgText from '../../Components/Common/Table/BgText';
import CommonTable from '../../Components/Common/Table/CommonTable';

const Patients = () => {
  const columns = [
    {
      key: '1',
      title: 'Office ID',
      dataIndex: 'officeId',
      render: (text) => <BgText text={text} />,
    },
    {
      key: '2',
      title: 'Company Name',
      dataIndex: 'companyName',
    },
    {
      key: '3',
      title: 'Owner Email Address',
      dataIndex: 'ownerEmailAddress',
    },
    {
      key: '4',
      title: 'Owner Phone Number',
      dataIndex: 'ownerPhoneNumber',
    },
    {
      key: '5',
      title: 'Commission %',
      dataIndex: 'commission',
      render: (text) => <span className='flex justify-center items-center'>{text}</span>,
    },
    {
      key: '6',
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data = [
    {
      officeId: '6466',
      companyName: 'ABC Translation Services',
      ownerEmailAddress: 'megan.james@mail.com',
      ownerPhoneNumber: '(534)543-8753',
      commission: '54',
      status: 0,
    },
    {
      officeId: '6467',
      companyName: 'ABC Translation Services',
      ownerEmailAddress: 'megan.james@mail.com',
      ownerPhoneNumber: '(543)833-5465',
      commission: '40',
      status: 1,
    },
    {
      officeId: '6468',
      companyName: 'ABC Translation Services',
      ownerEmailAddress: 'megan.james@mail.com',
      ownerPhoneNumber: '(534)545-6546',
      commission: '34',
      status: 1,
    },
    {
      officeId: '6469',
      companyName: 'ABC Translation Services',
      ownerEmailAddress: 'megan.james@mail.com',
      ownerPhoneNumber: '(453)567-3543',
      commission: '54',
      status: 0,
    },
    {
      officeId: '6470',
      companyName: 'ABC Translation Services',
      ownerEmailAddress: 'megan.james@mail.com',
      ownerPhoneNumber: '(768)534-8767',
      commission: '45',
      status: 1,
    },
    {
      officeId: '6471',
      companyName: 'ABC Translation Services',
      ownerEmailAddress: 'megan.james@mail.com',
      ownerPhoneNumber: '(324)435-5435',
      commission: '43',
      status: 0,
    },
    {
      officeId: '6472',
      companyName: 'ABC Translation Services',
      ownerEmailAddress: 'megan.james@mail.com',
      ownerPhoneNumber: '(545)756-6735',
      commission: '23',
      status: 0,
    },
    {
      officeId: '6473',
      companyName: 'ABC Translation Services',
      ownerEmailAddress: 'megan.james@mail.com',
      ownerPhoneNumber: '(545)566-5637',
      commission: '28',
      status: 1,
    },
  ];
  return (
    <div className='flex flex-col gap-y-3'>
      <h1 className='primary-heading text-xl'>Patients</h1>
      <div className='grid grid-cols-[100%] gap-x-8 items-start'>
        <CommonTable
          tableTitle='All Patients (110)'
          tableDesc='Following are patients registered with iLab 360'
          columns={columns}
          data={data}
          totalCount={12}
          btnName='Add New New Patient'
          //   btnHandler={() => navigate('/admin/manage-transalation-offices/add-translation-office')}
          //   onRow={(record) => ({
          //     onClick: () => {
          //       navigate(`/admin/manage-transalation-offices/translation-office-details/${record.officeId}`, {
          //         state: {
          //           record,
          //           tab: 'translation-offices',
          //         },
          //       });
          //     },
          //   })}
        />
      </div>
    </div>
  );
};

export default Patients;
