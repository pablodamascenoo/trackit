import Top from "../Top";
import Menu from "../Menu";
import HabitsEdit from "../HabitsEdit";
import PercentContext from "../../contexts/PercentContext";
import UserContext from "../../contexts/UserContext";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Container } from "../TodayScreen/style";
import { TitleBox, Content, HabitsBox } from "./style";

export default function HabitsScreen() {
  const { percent } = useContext(PercentContext);
  const { userInfo } = useContext(UserContext);

  const Navigate = useNavigate();

  const [habits, SetHabits] = useState([]);
  const [create, SetCreate] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo !== null ? userInfo.token : null}`,
    },
  };

  function toggleCreate() {
    SetCreate(!create);
  }

  function addHabits(habit) {
    SetHabits([...habits, habit]);
  }

  function delHabits(id) {
    SetHabits([...habits.filter((habit) => (habit.id !== id ? true : false))]);
  }

  useEffect(() => {
    if (userInfo === null) {
      Navigate("/");
      return;
    }

    const promisse = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );

    promisse.then((obj) => {
      const { data } = obj;
      SetHabits([...data]);
    });
  }, []);

  return (
    <Container>
      <Top />
      <Content>
        <TitleBox>
          <h2>Meus hábitos</h2>
          <button onClick={toggleCreate}>+</button>
        </TitleBox>
        <HabitsEdit
          hidden={!create}
          cancel={toggleCreate}
          created={false}
          addHabits={addHabits}
        />
        {habits.length === 0 ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          <></>
        )}
        <HabitsBox>
          {habits.map((habit) => (
            <HabitsEdit
              delHabits={delHabits}
              habitId={habit.id}
              key={habit.id}
              title={habit.name}
              selectedDays={habit.days}
              created={true}
            />
          ))}
        </HabitsBox>
      </Content>
      <Menu done={percent} />
    </Container>
  );
}
