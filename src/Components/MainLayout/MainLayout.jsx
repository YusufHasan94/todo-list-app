import UpNext from "../UpNext/UpNext";
import InProgress from "../InProgress/InProgress";
import Complete from "../Complete/Complete";
import "./MainLayout.css";
import { useEffect, useState } from "react";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
const MainLayout = ({ isOpen, openModal, closeModal, sortBy }) => {
  const [tasks, setTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem("formData"));
    if (storedTask) {
      setTasks(storedTask);
      UpdatedTaskList(storedTask);
    }
  }, []);

  useEffect(() => {
    if (sortBy) {
      sortTasksByOrder(sortBy);
    }
  }, [sortBy]);

  const UpdatedTaskList = (storedTask) => {
    const filterPendingTasks = storedTask?.filter(
      (task) => task.status == "pending"
    );
    setPendingTasks(filterPendingTasks);
    const filterOngoingTasks = storedTask?.filter(
      (task) => task.status == "progress"
    );
    setOngoingTasks(filterOngoingTasks);
    const filterCompletedTasks = storedTask?.filter(
      (task) => task.status == "completed"
    );
    setCompletedTasks(filterCompletedTasks);
  };

  const addTask = (newTask) => {
    const updatedTask = [...tasks, newTask];
    setTasks(updatedTask);
    UpdatedTaskList(updatedTask);
    localStorage.setItem("formData", JSON.stringify(updatedTask));
    closeModal();
  };
  const updateTaskStatus = (id, newStatus) => {
    const updatedTask = tasks?.map((task) =>
      task.id == id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTask);
    UpdatedTaskList(updatedTask);
    localStorage.setItem("formData", JSON.stringify(updatedTask));
  };

  const deleteTask = (id) => {
    const remainingTask = tasks.filter((task) => task.id !== id);
    setTasks(remainingTask);
    UpdatedTaskList(remainingTask);
    localStorage.setItem("formData", JSON.stringify(remainingTask));
  };

  const editTask = (editedTask) => {
    const updatedTasks = tasks.map((task) => {
      return task.id == editedTask.id ? editedTask : task;
    });
    setTasks(updatedTasks);
    UpdatedTaskList(updatedTasks);
    localStorage.setItem("formData", JSON.stringify(updatedTasks));
    setSelectedTask(null);
    closeModal();
  };

  const sortTasksByOrder = (order) => {
    console.log(order);
    let sortedTasks = [...tasks];
    if (order === "high") {
      sortedTasks.sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    } else if (order === "medium") {
      sortedTasks.sort((a, b) => {
        const priorityOrder = { medium: 3, low: 2, high: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    } else if (order === "low") {
      sortedTasks.sort((a, b) => {
        const priorityOrder = { low: 3, medium: 2, high: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    } else {
      return;
    }
    UpdatedTaskList(sortedTasks);
  };

  return (
    <div className="mainLayoutContainer">
      {isOpen ? (
        <AddTaskModal
          closeModal={closeModal}
          addTask={addTask}
          editTask={editTask}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
      ) : (
        ""
      )}
      <div className="allTaskContainer">
        <UpNext
          tasks={pendingTasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          openModal={openModal}
          setSelectedTask={setSelectedTask}
        />
        <InProgress
          tasks={ongoingTasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          openModal={openModal}
          setSelectedTask={setSelectedTask}
        />
        <Complete
          tasks={completedTasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          openModal={openModal}
          setSelectedTask={setSelectedTask}
        />
      </div>
    </div>
  );
};

export default MainLayout;
