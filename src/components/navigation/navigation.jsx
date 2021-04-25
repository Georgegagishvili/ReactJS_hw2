import PropTypes from "prop-types";

function Navigation({ page, setPage }) {
  return (
    <div className="row mb-4">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <button
            className={`nav-link ${page === "todoPage" ? "active" : " "}`}
            onClick={() => setPage("todoPage")}
          >
            To do
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${page === "commentsPage" ? "active" : " "}`}
            onClick={() => setPage("commentsPage")}
          >
            Comments
          </button>
        </li>
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Navigation;
