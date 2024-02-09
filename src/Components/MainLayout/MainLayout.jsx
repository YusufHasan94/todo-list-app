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

  const deleteTask = (id) => {
    const remainingTask = tasks.filter((task) => task.id !== id);
    setTasks(remainingTask);
    localStorage.setItem("formData", JSON.stringify(remainingTask));
  };

  return (
    <div className="mainLayoutContainer">
      <div className="allTaskContainer">
        <UpNext
          tasks={pendingTasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
        <InProgress
          tasks={ongoingTasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
        <Complete
          tasks={completedTasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default MainLayout;
