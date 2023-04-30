import {AuthPageLayout, RegisterForm} from "components";

const RegisterPage = ({...props}) => {
  return (
    <AuthPageLayout>
      <RegisterForm/>
    </AuthPageLayout>
  );
};

export {RegisterPage};