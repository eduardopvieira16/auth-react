import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute: React.FC<{ path: string; element: React.ReactNode }> = ({ path, element }) => {
  const { signed } = useContext(AuthContext);

  return signed ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<PrivateRoute element={<Home />} path="/home" />} />
    </Routes>
  );
};

export default AuthRoutes;
