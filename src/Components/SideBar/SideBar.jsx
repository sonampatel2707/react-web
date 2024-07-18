import React from "react";
import "./SideBar.css";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleFill } from "react-icons/ri";

const SideBar = ({bgColor, color}) => {
  return (
    <>
      <div className="side-bar-content" style={{ backgroundColor: `${bgColor}`, color: `${color}`, }}
         >
        <div className="top-content">
          <div className="items">
            <FaHome className="icons"/> Home
          </div>
          <div className="items">
            {" "}
            <IoIosNotifications className="icons"/>
            Notifications
          </div>
          <div className="items">
            <FaShopify className="icons"/> Shop
          </div>
          <div className="items">
            {" "}
            <BiSolidConversation className="icons"/>
            Conversation
          </div>
          <div className="items">
            <FaWallet className="icons"/>
            Wallet
          </div>
          <div className="items">
            <MdSubscriptions className="icons"/>
            Subscription
          </div>
          <div className="items">
            <CgProfile className="icons"/>
            My Profile
          </div>
        </div>
        <div className="bottom-content items">
          <RiLogoutCircleFill className="icons"/>
          Log Out
        </div>
      </div>
    </>
  );
};

export default SideBar;
