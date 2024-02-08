import React from "react";
import SectionTitleContainer from "../SectionTitleContainer/SectionTitleContainer";
import TaskCard from "../TaskCard/TaskCard";

const InProgress = () => {
  return (
    <div>
      <SectionTitleContainer title="In Progress" />
      <div>
        <div>
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default InProgress;
