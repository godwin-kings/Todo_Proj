import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("")
  }
  console.log(todos);

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
if (condition) {
  
} else {
  
}
        return todo
      })
    })
  }

 function deleteTodo(id) {
  setTodos(currentTodos =>{
    return currentTodos.filter(todo => todo.id !== id)
  })
 }
  
 

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">add item</button>
      </form>
      <h1>TODO LIST</h1>
      <ul className="list">
        {todos.length === 0 && "No todo"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todos.completed}
                  onChange={e => toggleTodo(todo.id, e.target.checked)
                  }
                />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </>
  );
}
