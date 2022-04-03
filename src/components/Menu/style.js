import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  max-height: 70px;
  background-color: white;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 31px;
  }

  a > p {
    color: #52b6ff;
    font-size: 18px;
  }

  div > div {
    width: 91px;
    height: 91px;
    padding: 0;
    margin-bottom: 50px;
  }
`;
