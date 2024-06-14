import { Container, Content, Title, Button } from "./styles";

const Home = () => {
  const handleLogout = () => {
    console.log('handleLogin')
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
