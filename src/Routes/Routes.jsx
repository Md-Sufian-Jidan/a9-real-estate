import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CardDetails from "../Components/CardDetails/CardDetails";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import AboutUs from "../Components/About/AboutUs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element:<Home />
        },
        {
          path:'/user-profile',
          element:<ProtectedRoute><UserProfile /></ProtectedRoute>
        },
        {
          path:'/update-profile',
          element:<ProtectedRoute><UpdateProfile /></ProtectedRoute>
        },
        {
          path:'/about-us',
          element:<ProtectedRoute><AboutUs /></ProtectedRoute>
        },
        {
            path: '/card/:id',
            element:<ProtectedRoute><CardDetails /></ProtectedRoute>
        },
        {
            path: '/login',
            element:<Login />
        },
        {
            path: '/register',
            element:<Register />
        },
      ]
    },
  ]);

export default router;