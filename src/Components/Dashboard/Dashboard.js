import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content  ">
        <Outlet />
        <label
          for="my-drawer-2"
          className="btn bg-gradient-to-r to-green-200 from-yellow-200 border-none text-black  drawer-button lg:hidden btn-md  absolute  right-0 bottom-0 left-0 "
        >
          <img
            className="w-10 ml-[-16px] "
            src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/344/external-arrow-arrow-flatart-icons-solid-flatarticons-6.png"
            alt=""
          />{" "}
          Open drawer
        </label>
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-green-200 rounded text-base-content ">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link
              className="btn bg-gradient-to-r to-green-300 from-yellow-300 border-none mb-4 font-bold"
              to="/dashboard"
            >
              Employee List
            </Link>
          </li>
          <li>
            <Link
              className="btn bg-gradient-to-r from-green-300 to-yellow-300 border-none font-bold"
              to="/dashboard/employeeAnalytics"
            >
              Employee Analytics
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
