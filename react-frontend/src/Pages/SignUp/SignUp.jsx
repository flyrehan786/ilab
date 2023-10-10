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
      <div className='w-full h-screen flex justify-center items-center bg-light-gray'>
        <Form onFinish={onFinishHandler} className='standand-input bg-white w-[400px] py-[32px] px-[40px] rounded box-border shadow-boxShadow'>
          <div className='flex flex-col justify-center items-center mb-[16px]'>
            <JiraLogo />
            <p className='font-medium text-[16px] leading-5 pt-[24px]'>Sign up to continue</p>
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
          <Button htmlType='submit' className='w-full h-[38px] bg-theme-color text-white text-[16px] rounded-none hover:!text-white'>
            Register
          </Button>
          <Divider className='bg-[#D8D5CD] mt-8' />
          <div className='flex justify-center text-theme-color tracking-wide'>
            <p className='text-[15px] text-text-gray'>
              Already have an account ?{' '}
              <span onClick={() => navigate('/login')} className='cursor-pointer font-medium'>
                Login
              </span>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
