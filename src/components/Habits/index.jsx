import check from "../../images/check.svg";
import { Container, CheckBox } from "./style";

export default function Habits({ checked, title, current, record }) {
  return (
    <Container>
      <div>
        <h2>{title === undefined ? "Titulo do Hábito" : title}</h2>
        <p>Sequencia atual: {current === undefined ? 0 : current}</p>
        <p>Seu recorde: {record === undefined ? 0 : record}</p>
      </div>
      <CheckBox checked={checked}>
        <img src={check} alt="" />
      </CheckBox>
    </Container>
  );
}
