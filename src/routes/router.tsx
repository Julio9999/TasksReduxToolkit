import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TaskForm from "../components/taskForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/create",
    element: <TaskForm />
  },
  {
    path: "/update/:id",
    element: <TaskForm />
  }
 ])