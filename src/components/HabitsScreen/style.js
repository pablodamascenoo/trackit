import styled from "styled-components";

export const TitleBox = styled.main`
  padding-top: 98px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: #126ba5;
    font-size: 23px;
    line-height: 29px;
  }

  button {
    cursor: pointer;
    background-color: #52b6ff;
    border-radius: 4.6px;
    width: 40px;
    height: 35px;
    border: none;
    color: white;
    font-size: 27px;
  }
`;

export const Content = styled.div`
  padding: 0 18px;
  overflow-y: scroll;

  & > p {
    margin-top: 28px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

export const HabitsBox = styled.div`
  padding-bottom: 110px;
`;
