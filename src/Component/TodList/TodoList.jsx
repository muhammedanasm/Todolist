import React from "react";
import LottieAnimation from "../Modal/LottieAnimation";
import "./TodoList.css";

const TodoList = ({ todos, onToggleComplete, onDeleteTodo, onAddTodo }) => {
  console.log("todos", todos);
  return (
    <div
      className="Table-Parent"
      style={{ margin: "0px 10px", borderRadius: "10px" }}
    >
      {todos.length === 0 ? (
        <div className="empty-state">
          <LottieAnimation />
          <button className="add-todo-button" onClick={onAddTodo}>
            Add Todo
          </button>
        </div>
      ) : (
        <table className="todo-table">
          <thead>
            <tr>
              <th className="table-head q1_head1">Name</th>
              <th className="table-head">Phone Number</th>
              <th className="table-head q1_head2">Email</th>
              <th className="table-head">Completed</th>
              <th className="table-head">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} className={todo.completed ? "completed" : ""}>
                <td>{todo.name}</td>
                <td>{todo.phoneNumber}</td>
                <td>{todo.email}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggleComplete(todo.id)}
                  />
                </td>
                <td>
                  {todo.completed && (
                    <button
                      className="delete-button"
                      onClick={() => onDeleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoList;
