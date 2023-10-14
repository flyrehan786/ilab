import React from 'react';
import { Form, Radio } from 'antd';
import { useLocation } from 'react-router-dom';
import { BreadCrumbs } from '../../Components/Common/BreadCrumbs';
import BackBtn from '../../Components/Common/BackBtn';
import Header_titleAndDesc from '../../Components/Common/Header_titleAndDesc';
import FormInput from '../../Components/Common/FormInput';
import CommonBtn from '../../Components/Common/CommonBtn';
import { GENDER } from '../../constants/constant';

const Add_and_Edit_Patients = () => {
  const location = useLocation();
  const editPage = location?.state?.editPage;
  const record = location?.state?.record;
  console.log('record', record);

  const finishHandler = (values) => {
    console.log('Edit and Add Values', values);
  };
  return (
    <div className='flex flex-col gap-y-5'>
      <BreadCrumbs items={['Patients', `${editPage ? 'Edit' : 'Add'} Patient`]} />
      <BackBtn name='Back' page={'patients'} />
      <div className='w-full rounded-md h-auto bg-white bgShadow'>
        <Header_titleAndDesc
          title={`${editPage ? 'Edit Patient' : 'Add Patient'}`}
          desc={`${editPage ? 'Edit details below and then save changes' : 'Enter details below to get registered with ALSN'}`}
        />
        <Form
          initialValues={record}
          onFinish={finishHandler}
          layout='vertical'
          className='custom-select w-full lg:w-[70%] xl:w-[60%] flex flex-col  gap-y-4 p-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6  gap-y-4 '>
            <FormInput
              name='full_name'
              className='h-9 rounded-sm'
              placeholder='Enter Full Name'
              inputType={'text'}
              label={'Full Name'}
              required='*'
            />
            <FormInput
              name='date_of_birth'
              className='h-9 rounded-sm min-w-full'
              placeholder='Select Date of brith'
              inputType={'date'}
              label={'Date Of Brith'}
              required='*'
            />
          </div>
          <div className='custom-select grid grid-cols-1 md:grid-cols-2 gap-x-6  gap-y-4 '>
            <FormInput
              name='gender'
              className='h-9 rounded-sm'
              placeholder='Select Date of brith'
              inputType={'select'}
              label={'Gender'}
              required='*'
              options={[
                { label: 'Male', value: 0 },
                { label: 'Famale', value: 1 },
              ]}
              defaultValue={0}
            />
            <FormInput
              name='email_address'
              className='h-9 rounded-sm'
              placeholder='Enter Email Address'
              inputType={'text'}
              label={'Email Address'}
              required='*'
            />
          </div>
          <div className='grid grid-cols-1'>
            <FormInput
              name='address'
              className=' h-9 rounded-sm'
              placeholder='Street: SHOBAH Dist.,City: Riyadhhobah '
              inputType={'textarea'}
              label={'Address'}
              required='*'
              autoSizeTextArea={{ minRows: 2, maxRows: 8 }}
            />
          </div>
          <div className='flex items-center justify-end gap-x-4 mt-4'>
            <CommonBtn className={'ternary-btn py-3 px-5 text-[13px]'} text={'Back'} />
            <CommonBtn htmlType={'sumbit'} className={'primary-btn py-3 text-[13px] px-5 font-normal'} text={'Add patient'} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Add_and_Edit_Patients;
