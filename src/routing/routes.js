import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const routes = [
  { path: "/", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  //   { path: "/experience", element: <Experience /> },
  //   { path: "/projects", element: <Projects /> },
  //   { path: "/portfolio", element: <Home /> },
  //   { path: "/portfolio/skills", element: <Skills /> },
  //   { path: "/portfolio/education", element: <Education /> },
  //   { path: "/portfolio/experience", element: <Experience /> },
  //   { path: "/portfolio/projects", element: <Projects /> },
  { path: "*", element: <Navigate to="/" /> },
];
