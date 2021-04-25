import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import TodosPage from "./pages/todos";
import CommentsPage from "./pages/comments";
import TodosProviderComponent from "./contexts/TodosProvider";

function App() {
  const [page, setPage] = useState({
    todoPage: true,
    commentsPage: false,
  });

  const [currentPage, setCurrentPage] = useState("todoPage");

  const updatePage = (pageKey) => {
    const updateActivePage = { ...page };
    let newCurrentPage = "";

    Object.keys(updateActivePage).forEach((key) => {
      if (key === pageKey) {
        updateActivePage[pageKey] = true;
        newCurrentPage = pageKey;
      } else {
        updateActivePage[key] = false;
      }
    });

    setPage(updateActivePage);
    setCurrentPage(newCurrentPage);
  };
  return (
    <div className="container mt-5">
      <Navigation page={currentPage} setPage={updatePage}></Navigation>
      {page.todoPage && (
        <TodosProviderComponent>
          <TodosPage></TodosPage>
        </TodosProviderComponent>
      )}
      {page.commentsPage && <CommentsPage></CommentsPage>}
    </div>
  );
}

export default App;
