import React, { useState } from "react";
import SectionTitleContainer from "../SectionTitleContainer/SectionTitleContainer";
import TaskCard from "../TaskCard/TaskCard";

const Complete = ({ tasks, updateTaskStatus, deleteTask }) => {
  return (
    <div>
      <SectionTitleContainer title="completed" count={tasks?.length} />
      <div>
        {tasks?.map((item, index) => (
          <TaskCard
            key={index}
            item={item}
            updateTaskStatus={updateTaskStatus}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Complete;
