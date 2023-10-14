import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Form, Image, Input, message } from 'antd';

import JiraLogo from '../../assets/icon/JiraLogo';
import apiClient from '../../axios/axios';

const Login = () => {
  // Navigate Hook.....
  const navigate = useNavigate();

  // display message component
  const [messageApi, contextHolder] = message.useMessage();

  // onFinish Handler
  const finishHandler = (values) => {
    console.log('Login Form Data', values);
    mutate(values);
  };
  //==============================================
  // ================ Login Api ==================
  //==============================================
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
          window.location.href = '/';
        }, 1000);
      }
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Invalid username or password!',
      });
    },
  });

  return (
    <>
      {contextHolder}
      <div className='w-full h-screen flex justify-center items-center bg-light-purple font-cairo'>
        <div className='w-full md:w-[35%]'>
          <div className='flex flex-col justify-start gap-6 items-center w-full h-full'>
            <JiraLogo />
            <div className='bg-white w-full md:w-[406px] py-5 md:py-10 px-8 md:px-16 md:rounded-md border border-[#DFDFDF] shadow-[0px_5px_15px_#8A8A8A1A]'>
              <Form onFinish={finishHandler}>
                <div className='flex flex-col mb-8'>
                  <h2 className='text-black text-[24px] font-semibold'>Login</h2>
                  <h3 className='text-gray text-[16px]'>Enter credentials to get access</h3>
                </div>
                <Form.Item name={'username'}>
                  <Input type='text' placeholder='Email Username' className='h-[40px] rounded-sm' />
                </Form.Item>
                <Form.Item name={'password'}>
                  <Input type='password' placeholder='Password' className='h-[40px] rounded-sm' />
                </Form.Item>
                {/* <Form.Item name='save' valuePropName='checked'>
                  <Checkbox>Save credentials</Checkbox>
                </Form.Item> */}
                <Button htmlType='submit' className='w-full h-[40px] bg-dark-purple text-white hover:!text-white'>
                  Login
                </Button>
              </Form>
              <Divider className='bg-[#D8D5CD]' />
              <div className='flex justify-center'>
                <p className='text-[14px] text-text-gray'>
                  Create an account ?{' '}
                  <span onClick={() => navigate('/signin')} className='cursor-pointer font-medium'>
                    Sigup now
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
