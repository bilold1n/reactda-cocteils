import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/about";
import Layout from "./pages/layout";
import layout from "./pages/layout";
import Detalis from "./pages/detalis";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/detalis/:id" element={<Detalis></Detalis>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
