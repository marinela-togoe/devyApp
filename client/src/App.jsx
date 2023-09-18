import React from 'react';
import { RouterProvider,  createBrowserRouter } from "react-router-dom";
import {
  DashboardLayout,
  Landing,
  HomeLayout,
  Register,
  Login,
  Error,
  Stats,
  AllJobs,
  EditJob,
  Profile,
  Admin,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
 
}

export default App;
