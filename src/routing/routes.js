import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgetPassword from "../pages/ForgetPassword";
import AddProduct from "../pages/AddProduct";
import UserProfile from "../pages/UserProfile";
import Dashboard from "../pages/Dashboard";

export const routes = [
  { path: "/", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/forgot-password", element: <ForgetPassword /> },
  { path: "/add-product", element: <AddProduct /> },
  { path: "/user-profile", element: <UserProfile /> },
  { path: "/dashboard", element: <Dashboard /> },
  // 3.  Dashboard ( show products)
  // 4.  User Profile (address & user details)
  // 5.  Cart Page(Current Orders)
  // 6.  Orders page (past orders)
  // 7.  Returns page  ( returns/:order_id )
  // 8.  Admin (to add / modify products )

  { path: "*", element: <Navigate to="/" /> },
];
