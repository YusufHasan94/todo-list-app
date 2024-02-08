import React from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { GrLinkNext } from "react-icons/gr";
import "./TaskCard.css";

const TaskCard = ({ item }) => {
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
