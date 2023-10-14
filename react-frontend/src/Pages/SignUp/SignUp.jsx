import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../axios/axios';

import { Button, Divider, Form, Input, message } from 'antd';
import JiraLogo from '../../assets/icon/JiraLogo';

const SignUp = () => {
  // ======== Navigate Hook =============
  const navigate = useNavigate();

  //========== Display Message =================
  const [messageApi, contextHolder] = message.useMessage();

  // =========== onFinish Handler =============
  const onFinishHandler = (values) => {
    mutate({ ...values, is_admin: '1' });
  };

  // ===================================
  // =========== SignUp Api =============
  // ===================================
  const { mutate, isLoading } = useMutation({
    mutationKey: 'sign-up-to-ilab',
    mutationFn: (data) => {
      return apiClient.post('users/register', data);
    },
    onSuccess: () => {
      // ============ Showing success message =============
      messageApi.open({
        type: 'success',
        content: 'User is successfully created',
      });

      //========= navigate to Home ================
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Something went wrong in signup',
      });
    },
  });

  return (
    <>
      {contextHolder}
      <div className='w-full h-screen flex justify-center items-center bg-light-purple'>
        <div className='flex flex-col justify-center gap-6 items-center w-full h-full'>
          <div className='flex flex-col justify-center items-center mb-[16px]'>
            <JiraLogo />
          </div>
          <Form onFinish={onFinishHandler} className='standand-input bg-white w-full md:w-[406px] py-5 md:py-10 px-8 md:px-16 md:rounded-md border border-[#DFDFDF] shadow-[0px_5px_15px_#8A8A8A1A]'>
            <div className='flex flex-col mb-8'>
              <h2 className='text-black text-[24px] font-semibold'>Sign Up</h2>
              <h3 className='text-text-gray text-[16px]'>Enter details below to sign up</h3>
            </div>
            <Form.Item name='first_name'>
              <Input placeholder='Enter your First Name' />
            </Form.Item>
            <Form.Item name='last_name'>
              <Input placeholder='Enter your Last Name' />
            </Form.Item>
            <Form.Item name='email'>
              <Input placeholder='Enter your email' />
            </Form.Item>
            <Form.Item name='username'>
              <Input placeholder='Enter your username' />
            </Form.Item>
            <Form.Item name='password'>
              <Input type='password' placeholder='Enter your password' />
            </Form.Item>
            <Button htmlType='submit' className='w-full h-[40px] bg-dark-purple text-white hover:!text-white rounded-none'>
              Register
            </Button>
            <Divider className='bg-[#D8D5CD] mt-8' />
            <div className='flex justify-center text-theme-color tracking-wide'>
              <p className='text-[14px] text-text-gray'>
                Already have an account ?{' '}
                <span onClick={() => navigate('/login')} className='cursor-pointer font-medium'>
                  Login
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
