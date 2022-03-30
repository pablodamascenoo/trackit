import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";

import {
  Container,
  Form,
  Input,
  Button,
  Logo,
  Anchor,
} from "../../global-styles/common-styles";

export default function RegisterScreen() {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Form>
        <Input type="email" name="email" id="email" placeholder="email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="senha"
        />
        <Input type="text" name="name" id="name" placeholder="nome" />
        <Input type="text" name="image" id="image" placeholder="foto" />
        <Button type="submit">Cadastrar</Button>
      </Form>
      <Link to="/">
        <Anchor>Já tem uma conta? Faça login!</Anchor>
      </Link>
    </Container>
  );
}
