import { useState } from "react";
import BaseButton from "../../../components/ui/button";

function AddTodoForm({ addNewTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault(title, description);
    const newTodo = {
      title,
      description,
      done,
      id: Math.random().toString(),
    };
    addNewTodo(newTodo);
    setTitle("");
    setDescription("");
  };

  return (
    <form className="row g-3" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title - {title}
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder=""
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description - {description}
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          value={description}
          onChange={({ target }) => {
            setDescription(target.value);
          }}
        ></textarea>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="done"
            onChange={({ target }) => {
              setDone(target.checked);
            }}
          />
          <label className="form-check-label" htmlFor="done">
            Done
          </label>
        </div>
        <BaseButton
          text="Submit"
          className="btn btn-primary col-5 mt-3"
          type="submit"
        ></BaseButton>
      </div>
    </form>
  );
}

export default AddTodoForm;
