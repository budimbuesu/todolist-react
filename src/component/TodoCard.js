import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoCard({ todo, index, handleDeleteTodo, handleUpdate }) {
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        <p> {todo}</p>
        <button
          onClick={() => {
            handleUpdate(index);
          }}
        >
          <BorderColorIcon />
        </button>
        <button>
          <DeleteIcon
            onClick={() => {
              handleDeleteTodo(index);
            }}
          />
        </button>
      </div>
    </li>
  );
}

export default TodoCard;
