import styled from "styled-components";

export const Container = styled.section`
  width: 340px;
  height: 94px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  p {
    font-size: 13px;
    color: #666666;
    line-height: 16px;
  }

  h2 {
    font-size: 20px;
    color: #666666;
    line-height: 25px;
    margin-bottom: 7px;
  }
`;

export const CheckBox = styled.div`
  width: 69px;
  height: 69px;
  background: ${(props) => (props.checked ? "#8FC549" : "#ebebeb")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Strike = styled.span`
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => (props.checked ? "#8FC549" : "#666666")};
`;
