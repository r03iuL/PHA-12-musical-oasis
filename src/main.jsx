import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import Authcontexts from "./Providers/Authcontexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <Authcontexts>
        <RouterProvider router={router} />
      </Authcontexts>
    </div>
  </React.StrictMode>
);
