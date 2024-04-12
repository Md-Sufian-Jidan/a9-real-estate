import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer} from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
