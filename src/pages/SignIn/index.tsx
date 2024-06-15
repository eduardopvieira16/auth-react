import { useState, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  Title,
  Form,
  InputWrapper,
  Input,
  Button,
} from "./styles";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro inesperado.");
      }
    }
  };

  return (
    <Container>
      <Content>
        <div>
          <Title>Faça seu login</Title>
        </div>
        <Form onSubmit={handleLogin}>
          <InputWrapper>
            <Input
              name="email"
              type="email"
              required
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="password"
              type="password"
              required
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <Button type="submit">Entrar</Button>
          {error && <p>{error}</p>}
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
