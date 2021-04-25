import React, { useState, useEffect } from "react";
import todosList from "../data/todo-list";

export const TodosContext = React.createContext(null);

function TodosProviderComponent({ children }) {
  const [todoList, setTodoList] = useState(todosList);

  const addNewTodo = (newTodo) => {
    const newList = [...todoList, newTodo];
    setTodoList(newList);
  };

  const onItemClick = (itemId) => {
    const itemIndex = todoList.findIndex((item) => item.id === itemId);
    if (!todoList[itemIndex].done) {
      const newListState = [
        ...todoList.slice(0, itemIndex),
        {
          ...todoList[itemIndex],
          done: true,
        },
        ...todoList.slice(itemIndex + 1),
      ];
      setTodoList(newListState);
    } else {
      const newListState = todoList.filter((n) => n.id !== itemId);
      setTodoList(newListState);
    }
  };

  TodosContext.displayName = "TodosContext";

  return (
    <TodosContext.Provider
      value={{ addNewTodo, onItemClick, todoList, setTodoList }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProviderComponent;
