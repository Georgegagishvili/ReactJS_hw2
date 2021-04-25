import { useState } from "react";
import AddTodoForm from "../../components/forms/add-todo-form";
import TodoList from "../../components/list/todo-list";

import todoListData from "../../data/todo-list";

function TodosPage(props) {
  const [todoList, setTodoList] = useState(todoListData);

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

  return (
    <div className="row">
      <h2>Todo List</h2>
      <div className="col-5">
        <AddTodoForm addNewTodo={addNewTodo}></AddTodoForm>
      </div>
      <div className="d-flex row">
        <TodoList data={todoList} onItemClick={onItemClick}></TodoList>
      </div>
    </div>
  );
}
export default TodosPage;
