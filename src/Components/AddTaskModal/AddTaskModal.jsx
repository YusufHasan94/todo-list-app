import React, { useEffect } from "react";
import "./AddTaskModal.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

const AddTaskModal = ({ closeModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;
    let status = "pending";
    const values = {
      title,
      description,
      deadline,
      priority,
      status,
    };
    console.log(values);
    let existingTasks = JSON.parse(localStorage.getItem("formData")) || [];
    if (!Array.isArray(existingTasks)) {
      existingTasks = [];
    }
    existingTasks.push(values);
    localStorage.setItem("formData", JSON.stringify(existingTasks));
    form.reset();
  };
  return (
    <div className="modalContainer">
      <form className="assignTaskModal" onSubmit={handleSubmit}>
        <h1>Add Task</h1>
        <div className="titleContainer">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="" required />
        </div>
        <div className="descriptionContainer">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="" rows="7" required></textarea>
        </div>
        <div className="deadlineContainer">
          <label htmlFor="deadline">Deadline</label>
          <input type="date" name="deadline" id="" required />
        </div>
        <div className="priorityContainer">
          <label htmlFor="priority">Priority</label>
          <select name="priority" id="" required>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="formBtnContainer">
          <button className="submitBtn">Submit</button>
          <button className="cancelBtn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskModal;
