import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import { useAuth } from "../context/AuthContext";

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isSignedIn } = useAuth();
  return isSignedIn ? element : <Navigate to="/" replace />;
};

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/home" element={<PrivateRoute element={<Home />} />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AuthRoutes;