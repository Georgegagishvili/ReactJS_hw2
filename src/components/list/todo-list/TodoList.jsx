import TodoListItem from "./TodoListItem";

import "./todo-list.css";
function TodoList({ data, onItemClick }) {
  return (
    <>
      {data.map((item) => {
        return (
          <TodoListItem
            item={item}
            key={item.id}
            onItemClick={onItemClick}
          ></TodoListItem>
        );
      })}
    </>
  );
}

export default TodoList;
