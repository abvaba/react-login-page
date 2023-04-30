import {AuthPageLayout, OtpConfirmForm} from "components";

const OtpConfirmationCodePage = ({...props}) => {
  return (
    <AuthPageLayout>
      <OtpConfirmForm />
    </AuthPageLayout>
  );
};

export {OtpConfirmationCodePage};