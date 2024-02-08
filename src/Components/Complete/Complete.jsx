import React from "react";
import SectionTitleContainer from "../SectionTitleContainer/SectionTitleContainer";
import TaskCard from "../TaskCard/TaskCard";

const Complete = () => {
  return (
    <div>
      <SectionTitleContainer title="Complete" />
      <div>
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default Complete;
