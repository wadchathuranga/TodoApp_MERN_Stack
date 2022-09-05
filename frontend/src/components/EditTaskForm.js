import { useState } from "react";

const EditTaskForm = ({ setEditTask, task }) => {
  // console.log(editTask);

  const [text, setText] = useState(task.text);

  // data save func
  const onSubmit = (e) => {
    e.preventDefault();

    // validate text field
    if (!text) {
      alert("Please add a task");
      return;
    }

    // data save
    setEditTask({ _id: task._id, text: text });

    // clear text field
    setText("");
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Update Task</label>
          <input
            type="text"
            placeholder="Update Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input
          className="btn"
          style={{ backgroundColor: "orange" }}
          type="submit"
          value="Update"
        />
      </form>
    </>
  );
};

export default EditTaskForm;
