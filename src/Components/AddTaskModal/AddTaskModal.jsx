import React from "react";
import "./AddTaskModal.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
const AddTaskModal = ({ isOpen, closeModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const deadline = event.target.deadline.value;
    const priority = event.target.priority.value;
    const values = {
      title,
      description,
      deadline,
      priority,
    };
    console.log(values);
  };
  return (
    <div className="modalContainer">
      <form className="assignTaskModal" onSubmit={handleSubmit}>
        <h1>Add Task</h1>
        <div className="titleContainer">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="" />
        </div>
        <div className="descriptionContainer">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="" rows="7"></textarea>
        </div>
        <div className="deadlineContainer">
          <label htmlFor="deadline">Deadline</label>
          <input type="date" name="deadline" id="" />
        </div>
        <div className="priorityContainer">
          <label htmlFor="priority">Priority</label>
          <select name="priority" id="">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="formBtnContainer">
          <button className="submitBtn">Submit</button>
          <button className="cancelBtn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskModal;
