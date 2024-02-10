import React from "react";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import "./Navbar.css";

const Navbar = ({ openModal }) => {
  return (
    <div>
      <div className="navContainer">
        <div className="logoContainer">Todo App</div>
        <div className="navItemsContainer">
          <button className="searchBtn">
            <IoIosSearch />
          </button>
          <button className="notificationBtn">
            <IoIosNotifications />
          </button>
          <button className="addTaskBtn" onClick={openModal}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
