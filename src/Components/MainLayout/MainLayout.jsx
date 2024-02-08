import React from "react";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import UpNext from "../UpNext/UpNext";
import InProgress from "../InProgress/InProgress";
import Complete from "../Complete/Complete";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="mainLayoutContainer">
      <AddTaskModal />
      <div className="allTaskContainer">
        <UpNext />
        <InProgress />
        <Complete />
      </div>
    </div>
  );
};

export default MainLayout;
