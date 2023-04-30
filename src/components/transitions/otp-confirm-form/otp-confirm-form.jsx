import {useAuthMutation} from "app/api/auth-api";
import {AuthForm, Button, Input, LoadingDots, CountDown, ResendCode} from "components";
import {useLocalStorage, useSessionStorage, useCountDown} from "hooks";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import _ from './otp-confirm-form.module.sass';

const OtpConfirmForm = ({...props}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [code, setCode] = useState(Array(4).fill(''));
  const [phone, setPhone] = useSessionStorage('phone', null);
  const [time, setTime] = useSessionStorage('time', null);
  const [token, setToken] = useLocalStorage('token', null);
  const {timeCount} = useCountDown(time * 60);
  const navigate = useNavigate();
  const body = new FormData();
  body.append('phone', phone);
  const [auth, result] = useAuthMutation();

  const handleChange = (e, index) => {
    const val = e.target.value;
    const targetElement = e.target?.nextElementSibling;
    const arr = [...code];
    arr[index] = val.slice(0, 1);
    setCode(arr);
    if (index !== 3) {
      targetElement.removeAttribute('disabled');
      targetElement.focus();
    }
    if(index === 3) {
      setIsDisabled(false);
    }
  }
  useEffect(() => {
    console.log(code.join(''), 'cc')
    body.append('code', code.join(''));
  }, [code, body])

  const authForm_props = {
    legend: 'کد تأیید',
    handleSubmit: async (e) => {
      e.preventDefault();
      await auth({url: 'verify', body});
    }
  }
  useEffect(() => {
    if (result.isSuccess) {
      setMessage(result.data.message);
      setToken(result.data.token);
      navigate('/success-page');
    }
    if (result.isError) {
      // setMessage(result.error.data.data.message);
    }
  }, [result, message])

  const button_props = {
    label: result.isLoading ? <LoadingDots loadClasses='w-8'/> : 'تأیید',
    type: 'submit',
    buttonClasses: 'w-full h-10',
    disabled: timeCount !== '00:00' && isDisabled
  }
  const input_props = {
    label: 'کد تأیید را وارد کنید ...',
    stateType: code,
    type: 'number',
    message,
    fieldClass: 'mt-16 mb-4 w-full',
    messageClass: result.isError ? 'text-red-500' : result.isSuccess ? 'text-green-500' : 'hidden'
  }
  const resendBody = new FormData();
  useEffect(() => {
    resendBody.append('register_phone', phone);
  }, [resendBody, phone])
  const resendButton_props = {
    handleClick: async () => {
      await auth({url: 'loginRegister', resendBody});
    },
    disabled: timeCount !== '00:00' && isDisabled,
    classes: timeCount !== '00:00' && isDisabled ? 'text-red-500' : 'text-green-500'
  }
  return (
    <AuthForm {...authForm_props} >
      <Input {...input_props} >
        {code.map((cd, index) => <input
          className={_.code_field}
          type='number'
          min={0}
          max={9}
          value={code[index]}
          key={index}
          onChange={e => handleChange(e, index)}
          disabled={index !== 0}
        />)}
      </Input>
      <div className={`${_.otp_container} w-full mb-4`}>
        <CountDown time={time * 60}/>
        <ResendCode {...resendButton_props} />
      </div>
      <Button {...button_props} />
    </AuthForm>
  );
};

export {OtpConfirmForm};