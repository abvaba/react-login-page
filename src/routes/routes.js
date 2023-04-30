import {RequireAuth} from "components";
import {HomePage, OtpConfirmationCodePage, RegisterPage} from "pages";
import {homeRoutes} from "routes/home-routes";

const routes = [
  {path: '/register', element: <RegisterPage/>},
  {path: '/otp-confirmation-code', element: <OtpConfirmationCodePage/>},
  {path: '/', element: <RequireAuth><HomePage/></RequireAuth>, children: homeRoutes}
]

export {routes};