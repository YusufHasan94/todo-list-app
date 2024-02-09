import UpNext from "../UpNext/UpNext";
import InProgress from "../InProgress/InProgress";
import Complete from "../Complete/Complete";
import "./MainLayout.css";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [tasks, setTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem("formData"));
    if (storedTask) {
      setTasks(storedTask);

      const filterPendingTasks = storedTask.filter(
        (task) => task.status == "pending"
      );
      setPendingTasks(filterPendingTasks);

      const filterOngoingTasks = storedTask.filter(
        (task) => task.status == "progress"
      );
      setOngoingTasks(filterOngoingTasks);

      const filterCompletedTasks = storedTask.filter(
        (task) => task.status == "completed"
      );
      setCompletedTasks(filterCompletedTasks);
    }
  }, []);

  const updateTaskStatus = (id, newStatus) => {
    const updatedTask = tasks?.map((task) =>
      task.id == id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTask);
    localStorage.setItem("formData", JSON.stringify(updatedTask));
  };

  return (
    <div className="mainLayoutContainer">
      <div className="allTaskContainer">
        <UpNext tasks={pendingTasks} updateTaskStatus={updateTaskStatus} />
        <InProgress tasks={ongoingTasks} updateTaskStatus={updateTaskStatus} />
        <Complete tasks={completedTasks} updateTaskStatus={updateTaskStatus} />
      </div>
    </div>
  );
};

export default MainLayout;
