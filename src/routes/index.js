import {createBrowserRouter, createHashRouter} from "react-router-dom";
import {routes} from "routes/routes";

const router = () => {
  if(process.env.NODE_ENV === 'development') {
    return createBrowserRouter(routes);
  } else if(process.env.NODE_ENV === 'production') {
    return createHashRouter(routes);
  }
}

export {router};