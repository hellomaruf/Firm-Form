import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider";

function Nav() {
  const { user } = useContext(authContext);
  const { logOut } = useContext(authContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  console.log(user?.email);
  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="flex-1">
          <a className=" text-2xl font-bold">FirmFrom</a>
        </div>
        <div className="flex-none">
          <li className="flex gap-5">
            <span>{user?.email}</span>
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
        {user?.email ? (
          <button
            onClick={handleLogout}
            className="text-white bg-green-500 py-2 px-4 rounded-lg ml-4"
          >
            Sign out
          </button>
        ) : (
          <Link
            to="/login"
            className="text-white bg-green-500 py-2 px-4 rounded-lg ml-4"
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
