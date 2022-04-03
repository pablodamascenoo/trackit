import { Container, Days, Content, SubmitButtons } from "./style";
import trash from "../../images/trash.svg";

import Day from "../Day";
import UserContext from "../../contexts/UserContext";

import { useState, useContext } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function HabitsEdit({
  created,
  title,
  addHabits,
  cancel,
  selectedDays,
  habitId,
  delHabits,
}) {
  const [selecteds, SetSelecteds] = useState([]);
  const [input, SetInput] = useState("");
  const [submited, SetSubmited] = useState(false);
  const { userInfo } = useContext(UserContext);

  const days = [0, 1, 2, 3, 4, 5, 6];

  selectedDays = selectedDays === undefined ? [] : selectedDays;

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  function toggleSelection(id) {
    !selecteds.includes(id)
      ? SetSelecteds([...selecteds, id])
      : SetSelecteds([
          ...selecteds.filter((ids) => (ids !== id ? true : false)),
        ]);
  }

  function handleDelete(id) {
    if (!window.confirm("Deseja mesmo excluir esse hábito?")) return;

    const promisse = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
      config
    );

    promisse.then(() => {
      delHabits(id);
    });

    promisse.catch((error) => {
      alert(error.response.data.message);
    });
  }

  function handleSubmit() {
    if (selecteds.length === 0) {
      alert("Escolha pelo menos um dia para o hábito");
      return;
    }

    SetSubmited(true);
    const promisse = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      { name: input, days: selecteds },
      config
    );

    promisse.then((obj) => {
      const { data } = obj;
      SetSubmited(false);
      addHabits(data);
      cancel();
    });

    promisse.catch((error) => {
      alert(error.response.data.message);
      SetSubmited(false);
    });
  }

  return (
    <Container>
      <Content disabled={submited}>
        {created ? (
          <h2>{title}</h2>
        ) : (
          <input
            disabled={submited}
            type="text"
            placeholder="nome do hábito"
            value={input}
            onChange={(e) => SetInput(e.target.value)}
          />
        )}
        {created ? (
          <img
            src={trash}
            onClick={() => {
              handleDelete(habitId);
            }}
            alt="trash"
          />
        ) : (
          <></>
        )}
        <Days>
          {days.map((day) => {
            let alrSelected = selectedDays.includes(day) ? true : false;
            return (
              <Day
                created={created}
                submited={submited}
                alrSelected={alrSelected}
                key={day}
                id={day}
                toggleSelection={toggleSelection}
              />
            );
          })}
        </Days>
        {created ? (
          <></>
        ) : (
          <SubmitButtons disabled={submited}>
            <p onClick={!submited ? cancel : () => {}}>Cancelar</p>
            {
              <button type="submit" onClick={handleSubmit}>
                {!submited ? (
                  "Salvar"
                ) : (
                  <ThreeDots color="#ffffff" width={30} height={50} />
                )}
              </button>
            }
          </SubmitButtons>
        )}
      </Content>
    </Container>
  );
}
