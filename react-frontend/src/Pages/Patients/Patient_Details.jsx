import React from 'react';
import { useLocation } from 'react-router-dom';
import { BreadCrumbs } from '../../Components/Common/BreadCrumbs';
import BackBtn from '../../Components/Common/BackBtn';
import Label_And_Name from '../../Components/Common/Label_And_Name';

const Patient_Details = () => {
  const location = useLocation();
  const record = location?.state?.record;
  const { id, full_name, date_of_birth, gender, contact_number, email_address, address } = record;
  return (
    <div className='flex flex-col gap-y-5'>
      <BreadCrumbs items={['Patients', 'patient-details']} />
      <BackBtn name='Back' page={'patients'} />
      <div className='w-full rounded-md h-auto bg-white bgShadow'>
        <header className='flex items-center justify-between p-5 border-b border-border-gray'>
          <div className=''>
            <h1 className='primary-heading text-xl'>Patient Details</h1>
            <span className='primary-span'>Following are details of Patient</span>
          </div>
        </header>

        <section className='flex flex-col gap-y-6 p-5'>
          <div className='flex flex-col gap-y-4 p-5 border border-border-gray rounded-lg'>
            <div className='grid grid-cols-1 gap-4'>
              <Label_And_Name label={'Patient ID'} name={id} textColor='primary-heading' />
            </div>
            <div className='relative grid grid-cols-1 md:grid-col-2 xl:grid-cols-3 gap-4'>
              <Label_And_Name label={'Patient Name'} name={full_name} />
            </div>
            <div className='relative grid grid-cols-1 md:grid-col-2 xl:grid-cols-3 gap-4'>
              <Label_And_Name label={'Date Of Birth'} name={date_of_birth} />
              <Label_And_Name label={'Gender'} name={gender === '0' ? 'Male' : 'Female'} />
            </div>
            <div className='relative grid grid-cols-1 md:grid-col-2 xl:grid-cols-3 gap-4'>
              <Label_And_Name label={'Contact Number'} name={contact_number} />
              <Label_And_Name label={'Email Address'} name={email_address} />
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <Label_And_Name label={'Address'} name={address} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Patient_Details;
