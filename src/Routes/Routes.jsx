import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Classes from './../Pages/Classes/Classes';
import Instructors from './../Pages/Instructors/Instructors';
import Dashboard from './../Pages/Dashboard/Dashboard';
import Register from './../Pages/Register/Register';
import LogIn from './../Pages/LogIn/LogIn';
import Error from './../Pages/Error/Error';
import Secrete from './../Secrete/Secrete';
import PrivateRoutes from "./PrivateRoutes";
import AddClass from "../Pages/Dashboard/AddClass";
import MyStudent from "../Pages/Dashboard/MyStudent";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageItems from "../Pages/Dashboard/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";

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
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,

    },
    {
        path: "/LogIn",
    element: <LogIn></LogIn>,

    },
    {
        path: "/Secrete",
    element: <PrivateRoutes><Secrete></Secrete></PrivateRoutes>,

    },

  
  ],
  },
  {
    path:'Dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children:[
       {
        path:'mystudent',
        element:<MyStudent></MyStudent>
       },
       {
        path:'allusers',
        element:<AllUsers></AllUsers>
       },
       {
        path:'addClass',
        element:<AddClass></AddClass>
       },
       {
        path:"manageitems",
        element:<ManageItems></ManageItems>
       },
       {
        path:"payment",
        element:<Payment></Payment>
       },
       {
        path:'paymenthistory',
        element:<PaymentHistory></PaymentHistory>
       }
    ]
  },
  {
    path:"*",
    element:<Error></Error>
  }
]);
