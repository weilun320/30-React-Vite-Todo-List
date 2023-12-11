import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import Button from "react-bootstrap/Button";

function TodoList({ todos, deleteTodo }) {
  console.log(todos);

  return (
    <ul>
      {todos.map((todo, index) => {
        return <li className="mb-3" key={index}>
          {todo}
          <Button
            variant="danger"
            className="ms-3"
            onClick={() => deleteTodo(index)}
          >
            Delete
          </Button>
        </li>;
      })}
    </ul>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function deleteTodo(i) {
    const filteredTodos = todos.filter((todo, index) => {
      return (index !== i) ? todo : "";
    });

    setTodos([...filteredTodos]);
  }

  return (
    <div className="m-3">
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <Button variant="primary" className="ms-3" onClick={addTodo}>
        Add
      </Button>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
