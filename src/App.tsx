import AuthRoutes from "./routes/AuthRoutes";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <AuthRoutes />
    </AuthProvider>
  );
};

export default App;
