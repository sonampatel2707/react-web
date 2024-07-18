import React from "react";
import "./Navbar.css";
import { BsFillSearchHeartFill, BsToggle2On } from "react-icons/bs";
import { LuListFilter } from "react-icons/lu";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";

const Navbar = ({ bgColor, color, toggleButton, toggle }) => {

  const bgcolor = color == "black"?"#cbc5c5":"black"
  return (
    <>
      <div className="nav-bar"
      style={{backgroundColor:`${bgcolor}`}}>
        <div
          className="logo"
          style={{ backgroundColor: `${bgColor}`, color: `${color}`, }}
        >
          WDM
          <div onClick={toggleButton}>
            {toggle?(
              <BsToggleOn/>
            ):(
              <BsToggleOff/>
            )}
            {""}

          </div>
        </div>
        <div
          className="search"
          style={{ backgroundColor: `${bgColor}`, color: `${color}`, }}
        >
          <div className="left">
            <BsFillSearchHeartFill />
            Search Here...
          </div>
          <div className="right">
            <LuListFilter />
            Filters
          </div>
        </div>
        <div
          className="seller"
          style={{ backgroundColor: `${bgColor}`, color: `${color}`, }}
        >
          Become a Seller
        </div>
      </div>
    </>
  );
};

export default Navbar;
