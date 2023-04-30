import {useLocalStorage} from "hooks";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = ({...props}) => {
  const {children} = props;
  const [token, setToken] = useLocalStorage('token', null);
  const location = useLocation();
  if(!token) {
    return <Navigate to='/register' state={{from: location}} replace />
  }
  return children;
};

export {RequireAuth};