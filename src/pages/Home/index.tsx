import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button, Container, Content, Title } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <Container>
      <Content>
        <Title>Authentication Success!</Title>
        <Button type="button" onClick={handleSignOut}>
          Sair
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
