import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3001";

function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    GetTodos();

    console.log(todos);
  }, []);

  const GetTodos = () => {
    fetch(API_BASE + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
  };
  return (
    <div class="App">
      <h1>Welcome Rob J</h1>
      <h4>Your Tasks</h4>
      <div class="todos">
        {todos.map((todo) => (
          <div
            class={"todo " + (todo.complete ? "is-complete" : "")}
            key={todo._id}
          >
            <div class="checkbox"></div>
            <div class="text">{todo.text}</div>
            <div class="delete-todo">x</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
