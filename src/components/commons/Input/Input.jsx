import _ from './Input.module.sass';
const Input = ({...props}) => {
  const {label, stateType, type, id, name, handleChange, disabled, message, fieldClass, messageClass, children} = props;
  return (
    <div className={`${fieldClass} ${_.field}`}>
      <label className={_.field_label} htmlFor={id}>{label}</label>
      {
        stateType instanceof Array
          ? <div className={_.otp_codes_container}>
              {children}
            </div>
          : <input
            className={_.field_input}
            type={type}
            id={id}
            name={name}
            onChange={handleChange}
            disabled={disabled}
          />
      }
      <span
        className={`${messageClass} ${_.field_message}`}
      >
        {message}
      </span>
    </div>
  );
};

export {Input};