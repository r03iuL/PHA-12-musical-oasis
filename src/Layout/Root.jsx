import { Outlet } from "react-router-dom";
import NavBar from "./../Pages/Common/NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
