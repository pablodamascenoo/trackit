import Top from "../Top";
import Menu from "../Menu";
import Habits from "../Habits";

import { Container, Content } from "./style";

import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function TodayScreen() {
  require("dayjs/locale/pt-br");

  const [habits, SetHabits] = useState([]);
  const [doneTasks, SetDoneTasks] = useState([]);
  const [state, SetState] = useState(false);

  const { userInfo } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  useEffect(() => {
    const promisse = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promisse.then((obj) => {
      const { data } = obj;
      SetHabits([...data]);
      SetDoneTasks(data.filter((item) => (item.done ? true : false)));
    });
  }, [state]);

  function toggleCheck(id) {
    const checkId = doneTasks.filter((task) => (task.id === id ? true : false));

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
        <h2>{dayjs().locale("pt-br").format("dddd, DD/MM")}</h2>
        <h3>Nenhum hábito concluído ainda</h3>
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
      <Menu done={doneTasks.length / habits.length} />
    </Container>
  );
}
