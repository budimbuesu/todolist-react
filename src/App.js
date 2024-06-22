import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import "./index.css";

function App() {
  let todos = [
    "Eat more fruits and vege",
    "Pick up the kids from school",
    "do bicyclette",
  ];
  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
