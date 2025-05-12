import { AuthProvider } from "./context/AuthContext";
import AuthRoutes from "./routes/AuthRoutes";
import GlobalStyle from "./styles/styleGlobal";

const App = () => (
  <AuthProvider>
    <GlobalStyle />
    <AuthRoutes />
  </AuthProvider>
);

export default App;