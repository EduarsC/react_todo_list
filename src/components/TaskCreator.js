import { useState } from "react";
// props has only one property, that's why we directly use it
export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Enter new Project"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-md" style={{width:'100%'}}>Add</button>
      </div>
    </form>
  );
};
