import styled from "styled-components";

export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Playball&display=swap");
  font-family: "Playball", cursive;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 16px;
  }

  p {
    font-size: 39px;
    color: #ffffff;
  }

  div > div {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background: url(${(props) => `${props.imageUrl}`});
    background-position: center;
    background-size: cover;
  }
`;
