import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Classes from './../Pages/Classes/Classes';
import Instructors from './../Pages/Instructors/Instructors';
import Dashboard from './../Pages/Dashboard/Dashboard';
import Register from './../Pages/Register/Register';
import LogIn from './../Pages/LogIn/LogIn';
import Error from './../Pages/Error/Error';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [{
        path: "/",
    element: <HomePage></HomePage>,

    },
    {
        path: "/Classes",
    element: <Classes></Classes>,

    },
    {
        path: "/Instructors",
    element: <Instructors></Instructors>,

    },
    {
        path: "/Classes",
    element: <Classes></Classes>,

    },
    {
        path: "/Register",
    element: <Register></Register>,

    },
    {
        path: "/Dashboard",
    element: <Dashboard></Dashboard>,

    },
    {
        path: "/LogIn",
    element: <LogIn></LogIn>,

    },

  
  ],
  },
  {
    path:"*",
    element:<Error></Error>
  }
]);
