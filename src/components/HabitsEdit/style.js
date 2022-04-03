import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  min-height: 91px;
  height: inherit;
  background-color: white;
  border-radius: 5px;
`;

export const Days = styled.div`
  display: flex;
  gap: 4px;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 16px;

  img {
    position: absolute;
    right: 11px;
    top: 11px;
    cursor: pointer;
  }

  h2 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 45px;
    background: ${(props) => (props.disabled ? "#F2F2F2" : "white")};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: #666666;
    font-size: 20px;
    padding-left: 11px;
    margin-bottom: 10px;
    font-family: "Lexend Deca";

    ::placeholder {
      color: #dbdbdb;
      font-size: 20px;
      font-family: "Lexend Deca";
    }
  }
`;

export const SubmitButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  font-family: "Lexend Deca";
  align-items: center;
  gap: 23px;
  margin-top: 29px;

  button {
    width: 84px;
    height: 35px;
    background-color: #52b6ff;
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    border-radius: 4.6px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-family: "Lexend Deca";
    font-size: 15.976px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > p {
    color: #52b6ff;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
  }
`;
