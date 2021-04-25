import BaseButton from "../../../components/ui/button";

function TodoListItem({ item, onItemClick }) {
  const onClick = () => {
    onItemClick(item.id);
  };
  return (
    <div
      className={`card m-1 todo-list-item text-white ${
        item.done ? "bg-success" : "bg-primary"
      }`}
    >
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">{item.description}</p>
        <BaseButton
          text={item.done ? "Hide" : "Done"}
          className={`btn ${item.done ? "btn-danger" : "btn-success"}`}
          onClick={onClick}
        ></BaseButton>
      </div>
    </div>
  );
}
export default TodoListItem;
