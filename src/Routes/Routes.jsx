import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";

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
            path: '/',
            element:<Home />
        },
      ]
    },
  ]);

export default router;