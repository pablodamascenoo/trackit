import styled from "styled-components";

export const Title = styled.h2`
  font-size: 23px;
  line-height: 29px;
  color: #126ba5;
`;

export const Content = styled.div`
  padding-top: 98px;
  margin: 0 17px;

  & > div {
    font-family: "Lexend Deca";

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 335px;
    height: inherit;
    min-height: 402px;
    border-radius: 10px;
    margin: 11px auto;
    background-color: white;

    button {
      font-family: "Lexend Deca";
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  .react-calendar__navigation {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      font-size: 18px;
    }
  }

  .react-calendar__viewContainer {
    margin-top: 15px;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
  }

  .react-calendar__month-view__days {
    margin-top: 20px;
    gap: 23px;
  }

  .react-calendar__month-view__days > button {
    font-size: 16px;
  }
`;
