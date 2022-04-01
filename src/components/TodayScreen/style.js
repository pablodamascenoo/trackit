import styled from "styled-components";

export const Container = styled.main`
  background-color: #f2f2f2;
  height: 100%;
`;

export const Content = styled.article`
  margin-left: 17px;
  & > h2 {
    padding-top: 100px;
    color: #126ba5;
    font-size: 23px;
    line-height: 29px;
  }

  & > h3 {
    color: #bababa;
    font-size: 18px;
    line-height: 22px;
  }

  & > div {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
