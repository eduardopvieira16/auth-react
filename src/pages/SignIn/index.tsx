import { useState, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, Title, Form, InputWrapper, Input, Button } from "./styles";
import { AuthContext } from "../../context/AuthContext";
import { signInSchema } from "../../validation/authValidation";
import * as Yup from "yup";

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInSchema.validate({ email, password }, { abortEarly: false });

      await signIn(email, password);
      navigate('/home');
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        setError(validationError.errors.join('\n'));
      } else {
        setError("Credenciais inválidas. Verifique seu email e senha.");
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