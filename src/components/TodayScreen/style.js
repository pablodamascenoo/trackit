import styled from "styled-components";

export const Container = styled.main`
  background-color: #f2f2f2;
  height: 100%;
  overflow-y: scroll;
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  & > div:last-of-type {
    width: 90%;
    max-width: 480px;
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 120px;
  }
`;

export const TitleBox = styled.div`
  min-width: 288px;
  padding-top: 100px;
  & > h2 {
    color: #126ba5;
    font-size: 23px;
    line-height: 29px;
  }

  & > h3 {
    color: ${(props) => (props.done > 0 ? "#8FC549" : "#bababa")};
    font-size: 18px;
    line-height: 22px;
  }
`;
