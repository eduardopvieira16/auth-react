import { useNavigate } from "react-router-dom";
import { Container, Content, Title, Form, InputWrapper, Input, Button } from "./styles";

const SignIn = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <Container>
      <Content>
        <div>
          <Title>Faça seu login</Title>
        </div>
        <Form>
          <InputWrapper>
            <Input
              name="email"
              type="email"
              required
              placeholder="Digite seu email"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="password"
              type="password"
              required
              placeholder="Digite sua senha"
            />
          </InputWrapper>
          <Button type="button" onClick={handleLogin}>Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
