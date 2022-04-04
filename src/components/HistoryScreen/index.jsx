import Menu from "../Menu";
import Top from "../Top";

import Calendar from "react-calendar";
import { useContext } from "react";

import { Title, Content } from "./style";
import PercentContext from "../../contexts/PercentContext";
import { Container } from "../TodayScreen/style";

export default function HistoryScreen() {
  const { percent } = useContext(PercentContext);

  return (
    <Container>
      <Top />
      <Content>
        <Title> Histórico </Title>
        <Calendar />
      </Content>
      <Menu done={percent} />
    </Container>
  );
}
