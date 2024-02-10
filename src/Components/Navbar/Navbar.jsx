import React from "react";
import "./Navbar.css";

const Navbar = ({ openModal, setSortBy }) => {
  return (
    <div>
      <div className="navContainer">
        <div className="logoContainer">
          <h1>Todo App</h1>
        </div>
        <div className="navItemsContainer">
          <button className="addTaskBtn" onClick={openModal}>
            Add Task
          </button>
          <div className="searchOptionContainer">
            <label htmlFor="sort">Sort by priority</label>
            <select
              name="sortByPriority"
              id=""
              className="searchOption"
              onChange={(e) => setSortBy(e.target.value)}
              required
            >
              <option value="" selected disabled>
                select priority
              </option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
