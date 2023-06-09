import { Outlet } from "react-router-dom";
import NavBar from "./../Pages/Common/NavBar/NavBar";
import Footer from './../Pages/Common/Footer/Footer';

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
