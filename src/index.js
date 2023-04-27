import App from "App";
import {ConfirmCode} from "components/confirmCode";
import {LoginPage} from "components/loginPage";
import {SuccessPage} from "components/successPage";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.sass';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {path: '/login-page', element: <LoginPage />},
  {path: '/confirm-code', element: <ConfirmCode />},
  {
    path: '/', element: <App />, children: [
      {path: 'success-page', element: <SuccessPage />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


serviceWorkerRegistration.unregister();
reportWebVitals();
