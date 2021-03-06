import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 6px;
  margin-bottom: 25px;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 303px;
  height: 45px;
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "white")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 11px;
  font-size: 20px;
  font-family: "Lexend Deca", sans-serif;
  color: #666666;

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
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Lexend Deca", sans-serif;
`;

export const Logo = styled.img`
  margin-top: 68px;
`;

export const Anchor = styled.p`
  color: #52b6ff;
  text-decoration: underline;
  text-decoration-color: #52b6ff;
`;
