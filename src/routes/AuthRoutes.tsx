import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { signed } = useContext(AuthContext);
  return signed ? element : <Navigate to="/" replace />;
};

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
    </Routes>
  );
};

export default AuthRoutes;