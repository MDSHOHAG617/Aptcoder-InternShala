import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const logout = () => {
    signOut(auth);
  };
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <div class="navbar bg-green-200  ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="font-bold " to="/">
                  Home
                </Link>
              </li>

              {user && (
                <li>
                  <Link className="font-bold " to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
              {user ? (
                <li>
                  <button className="font-bold " onClick={logout}>
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link className="font-bold " to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <Link to="" class="btn btn-ghost normal-case text-xl">
            APTCODER-Task
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link className="font-bold " to="/">
                Home
              </Link>
            </li>

            {user && (
              <li>
                <Link className="font-bold " to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
            {user ? (
              <li>
                <button className="font-bold " onClick={logout}>
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link className="font-bold " to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div class="navbar-end">
          <a
            href="https://www.linkedin.com/in/md-shohag-034bb6190/"
            className=" "
          >
            <img
              className="w-10"
              src="https://img.icons8.com/nolan/344/linkedin-circled.png"
              alt=""
            />
          </a>
          <a href="https://github.com/MDSHOHAG617" className="">
            <img
              className="w-10"
              src="https://img.icons8.com/color/344/github.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="divider"></div>
    </div>
  );
};

export default Navbar;
