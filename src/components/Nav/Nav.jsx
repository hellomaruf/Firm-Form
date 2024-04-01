import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="flex-1">
          <a className=" text-2xl font-bold">FirmFrom</a>
        </div>
        <div className="flex-none">
          <li className="flex gap-5">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-semibold"
                  : "text-gray-800 font-semibold"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-semibold"
                  : "text-gray-800 font-semibold"
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-semibold"
                  : "text-gray-800 font-semibold"
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
