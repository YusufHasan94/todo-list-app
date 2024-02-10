import React, { useEffect, useState } from "react";
import SectionTitleContainer from "../SectionTitleContainer/SectionTitleContainer";
import TaskCard from "../TaskCard/TaskCard";

const InProgress = ({
  tasks,
  updateTaskStatus,
  deleteTask,
  openModal,
  setSelectedTask,
}) => {
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
              deleteTask={deleteTask}
              openModal={openModal}
              setSelectedTask={setSelectedTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InProgress;
