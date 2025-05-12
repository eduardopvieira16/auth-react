import { useNavigate } from "react-router-dom";
import { Container, Content, Title, Button } from "./styles";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    navigate("/", { replace: true });
  };

  return (
    <Container>
      <Content>
        <Title>Welcome Back!</Title>
        <Button type="button" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Content>
    </Container>
  );
};

export default Home;