function TodoList() {
  let todos = [
    "Eat more fruits and vege",
    "Pick up the kids from school",
    "do bicyclette",
  ];
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <li className="todoItem" key={index}>
            {todo}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
