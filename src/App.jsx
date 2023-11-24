import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import CounterPage from "./pages/CounterPage.jsx";
import TodoListPage from "./pages/TodoListPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import PostEditPage from "./pages/PostEditPage.jsx";
import PostsListPage from "./pages/PostsListPage.jsx";
import Inputs from "./components/Inputs.jsx";
import RenderInputs from "./components/RenderInputs.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<span className="text-2xl">Home Page</span>} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="todos" element={<TodoListPage />} />
          <Route path="posts" element={<PostsListPage />} />
          <Route path="posts/:id/edit" element={<PostEditPage />} />
          <Route path="input" element={<Inputs />} />
          <Route path="render" element={<RenderInputs />} />
          <Route
            path="*"
            element={<span className="text-2xl">Not found</span>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
