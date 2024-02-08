import React from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { GrLinkNext } from "react-icons/gr";
import "./TaskCard.css";

const TaskCard = () => {
  return (
    <div className="taskContainer">
      <div className="taskDescription">
        <h1>Title</h1>
        <p>Description</p>
        <p>Deadline</p>
        <p>Priority</p>
      </div>
      <div className="taskBtnContainer">
        <button>
          <CiEdit />
        </button>
        <button className="dltBtn">
          <CiTrash />
        </button>
        <button>
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
