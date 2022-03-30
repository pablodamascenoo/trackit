import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Form,
  Input,
  Button,
  Logo,
  Anchor,
} from "../../global-styles/common-styles";

export default function RegisterScreen() {
  const [signUp, SetSignUp] = useState({
    email: "",
    password: "",
    name: "",
    photo: "",
  });
  const [submited, SetSubmited] = useState(false);
  const Navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    SetSubmited(true);

    const promisse = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      {
        email: signUp.email,
        name: signUp.name,
        image: signUp.photo,
        password: signUp.password,
      }
    );

    promisse.then(() => {
      Navigate("/");
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
          type="email"
          id="email"
          placeholder="email"
          value={signUp.email}
          onChange={(e) => {
            SetSignUp({ ...signUp, email: e.target.value });
          }}
        />
        <Input
          disabled={submited}
          type="password"
          id="password"
          placeholder="senha"
          value={signUp.password}
          onChange={(e) => {
            SetSignUp({ ...signUp, password: e.target.value });
          }}
        />
        <Input
          disabled={submited}
          type="text"
          id="name"
          placeholder="nome"
          value={signUp.name}
          onChange={(e) => {
            SetSignUp({ ...signUp, name: e.target.value });
          }}
        />
        <Input
          disabled={submited}
          type="text"
          id="image"
          placeholder="foto"
          value={signUp.photo}
          onChange={(e) => {
            SetSignUp({ ...signUp, photo: e.target.value });
          }}
        />
        <Button disabled={submited} type="submit">
          {submited ? <ThreeDots color="#ffffff" /> : "Cadastrar"}
        </Button>
      </Form>
      <Link to="/">
        <Anchor>Já tem uma conta? Faça login!</Anchor>
      </Link>
    </Container>
  );
}
