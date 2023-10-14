import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BgText from '../../Components/Common/Table/BgText';
import CommonTable from '../../Components/Common/Table/CommonTable';
import EditIcon from '../../assets/svgs/edit.svg?react';
import ViewIcon from '../../assets/svgs/view.svg?react';
import DeleteIcon from '../../assets/svgs/delete.svg?react';
import DeleteModal from '../../Components/Common/Modals/DeleteModal';
import ModalLayout from '../../Layout/ModalLayout';

const Patients = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const columns = [
    {
      key: '1',
      title: 'Patient ID',
      dataIndex: 'id',
      render: (text) => <BgText text={text} />,
    },
    {
      key: '2',
      title: 'Full Name',
      dataIndex: 'full_name',
    },
    {
      key: '3',
      title: 'Date of brith',
      dataIndex: 'date_of_birth',
    },
    {
      key: '4',
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      key: '5',
      title: 'Contant Number',
      dataIndex: 'contact_number',
    },
    {
      key: '6',
      title: 'Address',
      dataIndex: 'address',
    },
    {
      key: '7',
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => {
        return (
          <div className='flex justify-center items-center gap-x-3'>
            <span
              className='cursor-pointer w-5'
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/patients/${record?.id}`, {
                  state: {
                    record,
                  },
                });
              }}>
              <ViewIcon />
            </span>
            <span
              className='cursor-pointer w-5'
              onClick={(e) => {
                e.stopPropagation();
                navigate('/patients/edit-patient/3232', {
                  state: {
                    editPage: true,
                    record,
                  },
                });
              }}>
              <EditIcon />
            </span>
            <span
              className='cursor-pointer w-5'
              onClick={(e) => {
                e.stopPropagation();
                setIsShow(true);
              }}>
              <DeleteIcon />
            </span>
          </div>
        );
      },
    },
  ];
  const data = [
    {
      id: '6466',
      full_name: 'Patient One',
      date_of_birth: 'patient.james@mail.com',
      gender: '0',
      contact_number: '(544) 434 4554',
      address: 'Pakistan KPK Peshawar Ring Road',
    },
    {
      id: '6466',
      full_name: 'ABC Translation Services',
      date_of_birth: 'megan.james@mail.com',
      gender: '(534)543-8753',
      contact_number: '54',
      address: 0,
    },
    {
      id: '6466',
      full_name: 'ABC Translation Services',
      date_of_birth: 'megan.james@mail.com',
      gender: '(534)543-8753',
      contact_number: '54',
      address: 0,
    },
    {
      id: '6466',
      full_name: 'ABC Translation Services',
      date_of_birth: 'megan.james@mail.com',
      gender: '(534)543-8753',
      contact_number: '54',
      address: 0,
    },
    {
      id: '6466',
      full_name: 'ABC Translation Services',
      date_of_birth: 'megan.james@mail.com',
      gender: '(534)543-8753',
      contact_number: '54',
      address: 0,
    },
  ];
  return (
    <div className='flex flex-col gap-y-3'>
      <h1 className='primary-heading text-xl'>Patients</h1>
      <div className='grid grid-cols-[100%] gap-x-8 items-start'>
        <CommonTable
          tableTitle='All Patients (110)'
          tableDesc='Following are patients registered with iLab'
          columns={columns}
          data={data}
          totalCount={12}
          btnName='Add New Patient'
          btnHandler={() => navigate('/patients/add-patient')}
          onRow={(record) => ({
            onClick: () => {
              navigate(`/patients/${record.officeId}`, {
                state: {
                  record,
                },
              });
            },
          })}
        />
      </div>
      <ModalLayout setIsOpen={setIsShow} isOpen={isShow}>
        <DeleteModal setIsOpen={setIsShow} />
      </ModalLayout>
    </div>
  );
};

export default Patients;
