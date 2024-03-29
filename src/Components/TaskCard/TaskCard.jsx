import React from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { GrLinkNext } from "react-icons/gr";
import "./TaskCard.css";

const TaskCard = ({
  item,
  updateTaskStatus,
  deleteTask,
  openModal,
  setSelectedTask,
}) => {
  const handleNext = () => {
    if (item.status == "pending") {
      updateTaskStatus(item.id, "progress");
    } else if (item.status == "progress") {
      updateTaskStatus(item.id, "completed");
    }
  };

  const handleDelete = () => {
    deleteTask(item.id);
  };

  const handleEditTask = () => {
    setSelectedTask(item);
    openModal();
  };

  return (
    <div className="taskContainer">
      <div className="taskDescription">
        <h1>{item?.title}</h1>
        <p>{item?.description}</p>
        <p>
          <span>Deadline:</span> {item?.deadline}
        </p>
        <p>
          <span>Priority: </span>
          {item?.priority}
        </p>
      </div>
      <div className="taskBtnContainer">
        <button onClick={handleEditTask}>
          <CiEdit />
        </button>
        <button className="dltBtn" onClick={handleDelete}>
          <CiTrash />
        </button>
        <button
          onClick={handleNext}
          disabled={item?.status == "completed"}
          className="nextBtn"
        >
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
