import React from "react";
import data from "../../utils/mook";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './navbar.css'
export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {data.map(({ path, title, id, img }) => {
          return (
            <div key={id} className="navbar-wrapper">
              <Outlet />
              <NavLink className='link-text' to={path}>
                <div className="wrapper">
                  <img src={img} alt="" />
                  <h1>{title}</h1>
                </div>
              </NavLink>
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
