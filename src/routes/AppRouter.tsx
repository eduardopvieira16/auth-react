import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "../context/AuthContext";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

const ProtectedRoute: React.FC<{ element: React.ReactNode; path: string }> = ({
  element,
  path,
  ...rest
}) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      path={path}
      element={isLoggedIn ? element : <Navigate to="/signin" replace />}
    />
  );
};

const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <ProtectedRoute path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/signin" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
