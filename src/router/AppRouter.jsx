import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Auth/Login";
import PrivateRoute from "./PrivateRoute";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/home" element={<PrivateRoute element={Home} />} />
      <Route path="/" element={<PrivateRoute element={Home} />} />
    </Routes>
  );
};
