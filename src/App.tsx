import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Sent } from "./routes/Sent";
import "./styles/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/sent',
    element: <Sent />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
