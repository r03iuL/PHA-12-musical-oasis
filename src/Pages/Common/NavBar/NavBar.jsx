import { Link } from "react-router-dom";
import logo from "../../../../public/Logo.png";


const NavBar = () => {
  const NavItems = (
    <>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/Instructors`}>Instructors</Link>
      </li>
      <li>
        <Link to={`/Classes`}> Classes</Link>
      </li>
      <li>
        <Link to={`/Dashboard`}>Dashboard </Link>
      </li>
      <li>
        <Link to={`/Register`}> Register </Link>
      </li>
      
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <img
            // className="sm:hidden"
            src={logo}
            alt="logo"
            style={{
              height: 80,
            }}
          />
          <a className="btn btn-ghost normal-case text-xl">Musical Oasis</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
        <div className="navbar-end">
          <Link className="btn" to={`/LogIn`} >Log In</Link>
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
