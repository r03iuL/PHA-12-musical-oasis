import { NavLink, Outlet } from "react-router-dom";

import useCart from "../../Hook/useCart";
import useAdmin from "../../Hook/useAdmin";
import ManageItems from './ManageItems';
import NavBar from "../Common/NavBar/NavBar";


function Dashboard() {
  const [cart] = useCart();
  
  const [isAdmin] = useAdmin();
  // const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side border-4 border-indigo-500">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}

          {
            isAdmin ? <>
            <li>
            <NavLink to="/Dashboard/manageItems">Menage Classes</NavLink>
          </li>
          
          <li>
            <NavLink to="/Dashboard/AddClass">Add Classes</NavLink>
          </li>
          <li>
            <NavLink to="/Dashboard/allusers">All Users</NavLink>
          </li>
            </> :<>
           
          <li>
            <NavLink to="/Dashboard/mystudent">My Classes
            <span className="badge bg-black border-none text-white">+{cart?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Dashboard/paymenthistory">Payment History</NavLink>
          </li>
            </>

          }
          
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/Instructors">Instructors</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
