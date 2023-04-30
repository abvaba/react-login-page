import _ from './resend-code.module.sass';
const ResendCode = ({...props}) => {
  const {handleClick, disabled, classes} = props;
  return (
    <button onClick={handleClick} disabled={disabled} className={`${classes} ${_.resend_btn}`}>
       ارسال مجدد
    </button>
  );
};

export {ResendCode};