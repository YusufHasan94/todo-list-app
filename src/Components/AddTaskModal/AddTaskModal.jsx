import React, { useEffect, useState } from "react";
import "./AddTaskModal.css";

const AddTaskModal = ({ closeModal }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("formData"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;
    const newTask = {
      id: Date.now(),
      title,
      description,
      deadline,
      priority,
      status: "pending",
    };
    console.log(newTask);

    const newTasks = [...tasks, newTask];
    console.log(newTasks);

    setTasks(newTasks);
    localStorage.setItem("formData", JSON.stringify(newTasks));

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
