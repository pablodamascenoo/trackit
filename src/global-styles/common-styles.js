import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 6px;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  width: 303px;
  height: 45px;
  background-color: white;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  ::placeholder {
    font-family: "Lexend Deca", sans-serif;
    color: #dbdbdb;
    font-size: 20px;
  }
`;

export const Button = styled.button`
  width: 303px;
  height: 45px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 21px;
  background: #52b6ff;
`;
