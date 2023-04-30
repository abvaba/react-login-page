import {Link, Outlet} from "react-router-dom";

const HomePage = ({...props}) => {
  return (
    <>
      <h1 className="title">صفحه اصلی</h1>
      <Link to='/login-page'>ورود</Link>
      <Outlet />
      <img src='/assets/images/logo192.png' />
      <div className="bg"></div>
    </>
  );
};

export {HomePage};