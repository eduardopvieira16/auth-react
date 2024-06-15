import { useNavigate } from "react-router-dom";
import { Container, Content, Title, Button } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
  };

  return (
    <Container>
      <Content>
        <Title>Authentication Success!</Title>
        <Button type="submit" onClick={handleLogout}>
          Sair
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
