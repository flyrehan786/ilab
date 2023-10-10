import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Form, Input, message } from 'antd';

import JiraLogo from '../../assets/icon/JiraLogo';
import apiClient from '../../axios/axios';

const Login = () => {
  // Navigate Hook.....
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  // onFinish Handler
  const finishHandler = (values) => {
    console.log('Login Form Data', values);
    mutate(values);
  };

  const { mutate, isLoading } = useMutation({
    mutationKey: 'sign-in-to-ilab',
    mutationFn: (data) => {
      return apiClient.post('auth', data);
    },
    onSuccess: (data) => {
      if (data && data.data.token) {
        // ============ Showing success message =============
        messageApi.open({
          type: 'success',
          content: 'User successfully logged In',
        });

        // =========== set token in local storage ===========
        localStorage.setItem(
          'token',
          JSON.stringify({
            jwtToken: data.data.token,
          })
        );

        //========= navigate to Home ================
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    },
    onError: (err) => {
      messageApi.open({
        type: 'error',
        content: 'Invalid username or password!',
      });
    },
  });

  return (
    <>
      {contextHolder}
      <div className='w-full h-screen flex justify-center items-center bg-light-gray'>
        <Form onFinish={finishHandler} className='standand-input bg-white w-[400px] py-[32px] px-[40px] rounded box-border shadow-boxShadow'>
          <div className='flex flex-col justify-center items-center mb-[16px]'>
            <JiraLogo />
            <p className='font-medium text-[16px] leading-5 pt-[24px]'>Log in to continue</p>
          </div>
          <Form.Item name='username'>
            <Input placeholder='Enter your username' />
          </Form.Item>
          <Form.Item name='password'>
            <Input type='password' placeholder='Enter your password' />
          </Form.Item>
          <Button
            htmlType='submit'
            loading={isLoading}
            className='w-full h-[38px] bg-theme-color text-white text-[16px] rounded-none hover:!text-white'>
            Continue
          </Button>
          <Divider className='bg-[#D8D5CD] mt-8' />
          <div className='flex justify-center text-theme-color tracking-wide'>
            <p className='text-[15px] text-text-gray'>
              Create an account ?{' '}
              <span onClick={() => navigate('/signin')} className='cursor-pointer font-medium'>
                Sigup now
              </span>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
