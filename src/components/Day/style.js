import styled from "styled-components";

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.selected ? "#CFCFCF" : "#ffffff")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-size: 20px;
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  cursor: pointer;
`;
