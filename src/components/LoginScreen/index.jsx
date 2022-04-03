import logo from "../../images/logo.svg";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useState, useContext, useEffect } from "react";

import {
  Container,
  Form,
  Input,
  Button,
  Logo,
  Anchor,
} from "../../global-styles/common-styles";
import UserContext from "../../contexts/UserContext";

export default function LoginScreen() {
  const [login, SetLogin] = useState({ email: "", password: "" });
  const [submited, SetSubmited] = useState(false);
  const { userInfo, SetUserInfo } = useContext(UserContext);
  const Navigate = useNavigate();

  useEffect(() => {
    if (userInfo !== null) Navigate("/hoje");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    SetSubmited(true);

    const promisse = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      { ...login }
    );

    promisse.then((obj) => {
      const { data } = obj;

      localStorage.setItem(
        "userInfo",
        JSON.stringify({ token: data.token, image: data.image })
      );
      SetUserInfo({ token: data.token, image: data.image });
      Navigate("/hoje");
    });

    promisse.catch((error) => {
      alert(error.response.data.message);
      SetSubmited(false);
    });
  }

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Form onSubmit={handleSubmit}>
        <Input
          disabled={submited}
          required
          type="email"
          placeholder="email"
          value={login.email}
          onChange={(e) => {
            SetLogin({ ...login, email: e.target.value });
          }}
        />
        <Input
          disabled={submited}
          required
          type="password"
          name="password"
          id="password"
          placeholder="senha"
          value={login.password}
          onChange={(e) => {
            SetLogin({ ...login, password: e.target.value });
          }}
        />
        <Button disabled={submited} type="submit">
          {submited ? <ThreeDots color="#ffffff" /> : "Entrar"}
        </Button>
      </Form>
      <Link to="/cadastro">
        <Anchor>Não tem uma conta? Cadastre-se!</Anchor>
      </Link>
    </Container>
  );
}
