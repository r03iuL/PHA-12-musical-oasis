import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [{
        path: "/",
    element: <HomePage></HomePage>,

    }],
  },
]);
