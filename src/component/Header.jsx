import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Logged Out Successfully!");
      })
      .catch((error) => {
        console.error("Logout Error:", error);
        toast.error("Error logging out. Please try again later.");
      });
  };
  return (
    <div className="navbar bg-base-100 my-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                    : "font-bold text-[#3c97d0]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allspots"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                    : "font-bold text-[#3c97d0]"
                }
              >
                All Spots
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addspot"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                    : "font-bold text-[#3c97d0]"
                }
              >
                Add Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mylist"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                    : "font-bold text-[#3c97d0]"
                }
              >
                My Cart
              </NavLink>
            </li>
            <li>
              {/* <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                    : "font-bold text-[#3c97d0]"
                }
              >
                Register
              </NavLink> */}
            </li>
          </ul>
        </div>
        <div>
          <div className="btn btn-ghost text-2xl font-bold text-[#3c97d0]">
            Tourist <span className="text-[#ed8d34]">Haven</span>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                    : "font-bold text-[#3c97d0]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allspots"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                    : "font-bold text-[#3c97d0]"
                }
              >
                All Spots
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addspot"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                    : "font-bold text-[#3c97d0]"
                }
              >
                Add Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mylist"
                className={({ isActive }) =>
                  isActive
                    ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                    : "font-bold text-[#3c97d0]"
                }
              >
                My Cart
              </NavLink>
            </li>
           
          </ul>
        </div>
        <div className="flex">
          {user ? (
            <div className="flex">
              <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34] hidden"
                : "font-bold text-[#3c97d0] hidden"
            }
          >
            Register
          </NavLink>
              <div
                tabIndex={0}
                role="button"
                className="avatar btn btn-circle btn-ghost"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
              >
                Logout
              </button>
            </div>
          ) : (
           <div className="flex justify-center items-center gap-4">
             <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34] "
                : "font-bold text-[#3c97d0]"
            }
          >
            Register
          </NavLink>
              <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-white btn font-bold bg-[#ed8d34] border-2 border-[#ed8d34]"
                  : "font-bold text-[#3c97d0]"
              }
            >
              Login
            </NavLink>
           </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
