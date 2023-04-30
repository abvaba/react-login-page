import {useAuthMutation} from "app/api/auth-api";
import {AuthForm, Button, Input, LoadingDots} from "components";
import {useSessionStorage} from "hooks";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import _ from './register-form.module.sass';
const RegisterForm = ({...props}) => {
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useSessionStorage('phone', null);
  const [time, setTime] = useSessionStorage('time', null);
  const navigate = useNavigate();
  const [auth, result] = useAuthMutation();

  const body = new FormData();

  const authForm_props = {
    legend: 'ورود | ثبت نام',
    handleSubmit: async (e) => {
      e.preventDefault();
      await auth({url:'loginRegister', body});
    }
  }
  const button_props = {
    label: result.isLoading ? <LoadingDots loadClasses='w-8' /> : 'ورود',
    type: 'submit',
    buttonClasses: 'w-full h-10'
  }
  const input_props = {
    label: 'شماره تماس خود را وارد کنید',
    type: 'tel',
    name: 'register_phone',
    handleChange(e) {
      body.append(e.target.name, e.target.value);
    },
    message,
    fieldClass: 'mt-16 mb-8 w-full',
    messageClass: result.isError ? 'text-red-500' : result.isSuccess ? 'text-green-500' : 'hidden'
  }

  useEffect(() => {
    if(result.isSuccess) {
      setMessage(result.data.message);
      setPhone(result.data.phone);
      setTime(result.data.time);
      navigate('/otp-confirmation-code');
    }
    if(result.isError) {
      setMessage(result.error.data.message);
    }
  }, [message, result])
  return (
    <AuthForm {...authForm_props}>
      <Input {...input_props} />
      <Button {...button_props} />
    </AuthForm>
  );
};

export {RegisterForm};