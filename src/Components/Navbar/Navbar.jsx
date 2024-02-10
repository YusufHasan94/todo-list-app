import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./Navbar.css";

const Navbar = ({ openModal }) => {
  return (
    <div>
      <div className="navContainer">
        <div className="logoContainer">
          <h1>Todo App</h1>
        </div>
        <div className="navItemsContainer">
          <button className="searchBtn">
            <IoIosSearch />
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
