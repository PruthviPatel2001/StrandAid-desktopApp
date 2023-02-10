import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3 p-4">
          <div className="flex justify-center items-center">
            <img src="/images/logo.png"/>
          </div>
        </div>
        <div className="col-span-6">
          <ul className="flex justify-center items-center ">
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
        <div className="col-span-3 p-4">
          <div className="flex justify-end items-center">
            <h1 className="text-[#ffffff] text-lg font-bold border-r-2 pr-2 mr-2">Hi,User</h1>
            <img src={"/images/user.png"} className="mt-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
