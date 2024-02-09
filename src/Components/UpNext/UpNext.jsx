import React, { useEffect, useState } from "react";
import "./UpNext.css";
import SectionTitleContainer from "../SectionTitleContainer/SectionTitleContainer";
import TaskCard from "../TaskCard/TaskCard";

const UpNext = ({ tasks, updateTaskStatus }) => {
  return (
    <div>
      <SectionTitleContainer title="Up Next" count={tasks?.length} />
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
  );
};

export default UpNext;
