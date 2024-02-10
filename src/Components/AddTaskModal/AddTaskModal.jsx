import React, { useEffect, useState } from "react";
import "./AddTaskModal.css";

const AddTaskModal = ({
  closeModal,
  addTask,
  editTask,
  selectedTask,
  setSelectedTask,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setDeadline(selectedTask.deadline);
      setPriority(selectedTask.priority);
    } else {
      resetState();
    }
  }, [selectedTask]);

  const resetState = () => {
    setTitle("");
    setDescription("");
    setDeadline("");
    setPriority("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: selectedTask ? selectedTask.id : Date.now(),
      title,
      description,
      deadline,
      priority,
      status: selectedTask ? selectedTask.status : "pending",
    };

    if (selectedTask) {
      editTask(newTask);
      resetState();
    } else {
      addTask(newTask);
      resetState();
    }
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    closeModal();
  };

  return (
    <div className="modalContainer">
      <form className="assignTaskModal" onSubmit={handleSubmit}>
        <h1>Add Task</h1>
        <div className="titleContainer">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="descriptionContainer">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id=""
            rows="7"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="deadlineContainer">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            name="deadline"
            id=""
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <div className="priorityContainer">
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id=""
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="" disabled selected>
              Select priority
            </option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="formBtnContainer">
          <button className="submitBtn">
            {selectedTask ? "Update" : "Submit"}
          </button>
          <button className="cancelBtn" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskModal;
