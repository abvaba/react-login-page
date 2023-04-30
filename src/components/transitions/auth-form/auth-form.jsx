import _ from "./auth-form.module.sass";

const AuthForm = ({...props}) => {
  const {children, legend, handleSubmit} = props;
  return (
    <form className={_.form} onSubmit={handleSubmit}>
      <span className={_.form_header}/>
      <fieldset className={_.form_fieldset}>
        <legend className={_.form_legend}>{legend}</legend>
        {children}
      </fieldset>
    </form>
  );
};

export {AuthForm};