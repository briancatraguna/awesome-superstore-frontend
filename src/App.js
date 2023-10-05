import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Navbar";
import { routes } from "./routing/routes";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
