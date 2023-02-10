import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div className="flex justify-center items-center">logo</div>
        </div>
        <div className="col-span-6">
          <ul className="flex justify-center items-center ">
            <NavLink to="/">
              <li className="m-8">Home</li>
            </NavLink>

            <NavLink to="/records">
              <li className="m-8">Records</li>
            </NavLink>

            <NavLink to="/stream">
              <li className="m-8">Stream</li>
            </NavLink>

            <NavLink to="/profile">
              <li className="m-8">Profile</li>
            </NavLink>
          </ul>
        </div>
        <div className="col-span-3">
          <div className="flex justify-center items-center">
            <h1>profile pic</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
