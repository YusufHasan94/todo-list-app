import React, { useEffect, useState } from "react";
import "./UpNext.css";
import SectionTitleContainer from "../SectionTitleContainer/SectionTitleContainer";
import TaskCard from "../TaskCard/TaskCard";

const UpNext = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const assignTasks = JSON.parse(localStorage.getItem("formData"));
    const filtered = assignTasks.filter((i) => i.status == "pending");
    setTasks(filtered);
  }, []);
  return (
    <div>
      <SectionTitleContainer title="Up Next" count={tasks.length} />
      <div>
        {tasks?.map((item, index) => (
          <TaskCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default UpNext;
