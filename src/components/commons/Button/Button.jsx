import _ from './Button.module.sass';
const Button = ({...props}) => {
  const {label, type, buttonClasses, disabled} = props;
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${buttonClasses} ${_.button}`}
    >
      {label}
    </button>
  );
};

export {Button};