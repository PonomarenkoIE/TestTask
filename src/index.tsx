import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { rootStore } from './store/RootStore';
import "./styles/css/index.css"
import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from './router/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>    
      <Provider store={rootStore}>    
        <RouterProvider router={router}/>  
        <Outlet />
      </Provider>
  </React.StrictMode>
);