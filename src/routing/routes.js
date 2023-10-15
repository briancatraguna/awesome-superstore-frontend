import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

// Explicitly have route paths so we can reference it in the navigation code
export const ROUTE_PATHS = {
  default: "/",
  login: "/login",
  register: "/register"
}

export const routes = [
  { path: ROUTE_PATHS.default, element: <LoginPage /> },
  { path: ROUTE_PATHS.login, element: <LoginPage /> },
  { path: ROUTE_PATHS.register, element: <RegisterPage /> },
  //   { path: "/experience", element: <Experience /> },
  //   { path: "/projects", element: <Projects /> },
  //   { path: "/portfolio", element: <Home /> },
  //   { path: "/portfolio/skills", element: <Skills /> },
  //   { path: "/portfolio/education", element: <Education /> },
  //   { path: "/portfolio/experience", element: <Experience /> },
  //   { path: "/portfolio/projects", element: <Projects /> },
  { path: "*", element: <Navigate to="/" /> },
];
