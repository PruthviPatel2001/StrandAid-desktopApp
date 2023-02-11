import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="my-32">
        <ul className="flex justify-center items-center flex-col  ">
          <NavLink to="/">
            <li className="m-8 text-lightpeach text-lg">Home</li>
          </NavLink>

          <NavLink to="/records">
            <li className="m-8 text-lightpeach text-lg">Records</li>
          </NavLink>

          <NavLink to="/stream">
            <li className="m-8 text-lightpeach text-lg">Stream</li>
          </NavLink>

          <NavLink to="/profile">
            <li className="m-8 text-lightpeach text-lg">Profile</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
