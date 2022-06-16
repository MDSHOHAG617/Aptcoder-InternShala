import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h2 className="text-4xl">Dashboard</h2>
        <Outlet />
        <label
          for="my-drawer-2"
          className="btn btn-warning drawer-button lg:hidden btn-md  absolute bottom-0 right-0 "
        >
          <img
            className="w-6 mr-2"
            src="https://cdn-icons.flaticon.com/png/512/1549/premium/1549454.png?token=exp=1655410567~hmac=2c0eb8842e494f5e8a2ce6539ef1e721"
            alt=""
          />{" "}
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Employee List</Link>
          </li>
          <li>
            <Link to="/dashboard/employeeAnalytics">Employee Analytics</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
