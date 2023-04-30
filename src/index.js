import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from "app/store";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import './styles/main.sass';
import {router} from "routes";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router()}/>
    </Provider>
  </React.StrictMode>
);

if(process.env.NODE_ENV === 'development') {
  serviceWorkerRegistration.unregister();
} else if(process.env.NODE_ENV === 'production') {
  serviceWorkerRegistration.register();
}


serviceWorkerRegistration.unregister();
reportWebVitals();
