import React, { useState } from "react";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="navContainer">
        <div className="logoContainer">Todo App</div>
        <div className="navItemsContainer">
          <button className="searchBtn">
            <IoIosSearch />
          </button>
          <button className="notificationBtn" onClick={openModal}>
            <IoIosNotifications />
          </button>
          <button className="addTaskBtn" onClick={openModal}>
            Add Task
          </button>
        </div>
      </div>
      {isOpen ? <AddTaskModal closeModal={closeModal} /> : ""}
    </div>
  );
};

export default Navbar;
