import check from "../../images/check.svg";
import { Container, CheckBox, Strike } from "./style";

export default function Habits({
  checked,
  title,
  current,
  record,
  toggleCheck,
  id,
}) {
  let bool = record === current && checked === true ? true : false;

  return (
    <Container>
      <div>
        <h2>{title === undefined ? "Titulo do Hábito" : title}</h2>
        <p>
          Sequencia atual:{" "}
          <Strike checked={checked}>
            {`${current === undefined ? 0 : current} dias`}
          </Strike>
        </p>
        <p>
          Seu recorde:{" "}
          <Strike checked={bool}>{`${
            record === undefined ? 0 : record
          } dias`}</Strike>
        </p>
      </div>
      <CheckBox
        checked={checked}
        onClick={() => {
          toggleCheck(id);
        }}
      >
        <img src={check} alt="" />
      </CheckBox>
    </Container>
  );
}
