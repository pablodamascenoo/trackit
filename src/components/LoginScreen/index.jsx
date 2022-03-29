import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";

import {
  Container,
  Form,
  Input,
  Button,
  Logo,
} from "../../global-styles/common-styles";

export default function LoginScreen() {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Form>
        <Input required type="email" placeholder="email" />
        <Input
          required
          type="password"
          name="password"
          id="password"
          placeholder="senha"
        />
        <Button type="submit">Entrar</Button>
      </Form>
      <Link to="/">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
