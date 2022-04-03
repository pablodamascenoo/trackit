import Top from "../Top";
import Menu from "../Menu";
import Habits from "../Habits";

import { Container, Content, TitleBox } from "./style";

import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import PercentContext from "../../contexts/PercentContext";
import { useNavigate } from "react-router-dom";

export default function TodayScreen() {
  require("dayjs/locale/pt-br");

  const [habits, SetHabits] = useState([]);
  const { percent, SetPercent } = useContext(PercentContext);
  const [state, SetState] = useState(false);

  const Navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo !== null ? userInfo.token : null}`,
    },
  };

  useEffect(() => {
    if (userInfo === null) {
      Navigate("/");
      return;
    }
    const promisse = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promisse.then((obj) => {
      const { data } = obj;
      SetHabits([...data]);
      SetPercent(
        data.length !== 0
          ? (
              data.filter((item) => (item.done ? true : false)).length /
              data.length
            ).toFixed(2)
          : 0
      );
    });
  }, [state]);

  function toggleCheck(id) {
    const checkId = habits.filter((task) =>
      task.id === id && task.done ? true : false
    );

    if (checkId.length === 0) {
      const promisse = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        {},
        config
      );

      promisse.then((obj) => {
        SetState(!state);
      });

      promisse.catch((error) => {
        console.log(error.response.data.message, id);
      });
    } else {
      const promisse = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        {},
        config
      );

      promisse.then((obj) => {
        SetState(!state);
      });

      promisse.catch((error) => {
        console.log(error.response.data.message, id);
      });
    }
  }

  return (
    <Container>
      <Top />
      <Content>
        <TitleBox done={percent}>
          <h2>{dayjs().locale("pt-br").format("dddd, DD/MM")}</h2>
          <h3>
            {percent !== 0
              ? `${percent * 100}% dos hábitos concluídos`
              : "Nenhum hábito concluído ainda"}
          </h3>
        </TitleBox>
        <div>
          {habits.map((habit) => (
            <Habits
              key={habit.id}
              checked={habit.done}
              title={habit.name}
              current={habit.currentSequence}
              record={habit.highestSequence}
              id={habit.id}
              toggleCheck={toggleCheck}
            />
          ))}
        </div>
      </Content>
      <Menu done={percent} />
    </Container>
  );
}
