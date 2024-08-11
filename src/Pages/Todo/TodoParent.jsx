import React, { useState, useEffect } from "react";
import Header from "../../Component/Header/Header";
import TodoList from "../../Component/TodList/TodoList";
import AddTodoModal from "../../Component/Modal/AddTodoModal";

const TodoParent = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), ...newTodo, completed: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const deleteCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const incompleteTaskCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <Header
        onAddTodo={() => setIsModalOpen(true)}
        onDeleteCompleted={deleteCompleted}
        incompleteTaskCount={incompleteTaskCount}
      />
      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onDeleteTodo={deleteTodo}
        onAddTodo={() => setIsModalOpen(true)}
      />
      <AddTodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addTodo}
      />
    </div>
  );
};

export default TodoParent;
