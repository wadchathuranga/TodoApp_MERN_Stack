import { FaTimes } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task">
      <h3>{task.text}</h3>
      <h3>
        <TiEdit
          style={{ color: "orange", cursor: "pointor", margin: 15 }}
          onClick={() => onEdit(task._id)}
        />
        <FaTimes
          style={{ color: "red", cursor: "pointor" }}
          onClick={() => onDelete(task._id)}
        />
      </h3>
    </div>
  );
};

export default Task;
