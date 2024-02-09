import React, { useEffect, useState } from "react";
import SectionTitleContainer from "../SectionTitleContainer/SectionTitleContainer";
import TaskCard from "../TaskCard/TaskCard";

const InProgress = ({ tasks, updateTaskStatus }) => {
  return (
    <div>
      <SectionTitleContainer title="In Progress" count={tasks?.length} />
      <div>
        <div>
          {tasks?.map((item, index) => (
            <TaskCard
              key={index}
              item={item}
              updateTaskStatus={updateTaskStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InProgress;
