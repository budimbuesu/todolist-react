import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoCard(props) {
  const { children } = props;
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {children}
        <BorderColorIcon />
        <DeleteIcon />
      </div>
    </li>
  );
}

export default TodoCard;
