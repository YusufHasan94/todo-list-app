import React from "react";
import "./UpNext.css";
import SectionTitleContainer from "../SectionTitleContainer/SectionTitleContainer";
import TaskCard from "../TaskCard/TaskCard";

const UpNext = () => {
  return (
    <div>
      <SectionTitleContainer title="Up Next" />
      <div>
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default UpNext;
