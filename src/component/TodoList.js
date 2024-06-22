import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return <TodoCard {...props} todo={todo} key={index} index={index} />;
      })}
    </ul>
  );
}

export default TodoList;
