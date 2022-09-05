import { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  // data save func
  const onSubmit = (e) => {
    e.preventDefault();

    // validate text field
    if (!text) {
      alert("Please add a task");
      return;
    }

    // data save
    onAdd({ text });

    // clear text field
    setText("");
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Add New Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input className="btn" type="submit" value="Save Task" />
      </form>
    </>
  );
};

export default AddTaskForm;
