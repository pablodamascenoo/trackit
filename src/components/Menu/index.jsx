import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

import "react-circular-progressbar/dist/styles.css";

import { Footer } from "./style";

export default function Menu({ done }) {
  return (
    <Footer>
      <div>
        <Link to="/habitos">
          <p>Hábitos</p>
        </Link>
        <div>
          <Link to="/hoje">
            <CircularProgressbar
              maxValue={1}
              background={true}
              value={done === undefined ? 0 : done}
              text={`Hoje`}
              backgroundPadding={6}
              styles={buildStyles({
                textSize: "18px",
                pathColor: `#fff`,
                textColor: "#fff",
                trailColor: "#52B6FF",
                backgroundColor: "#52B6FF",
              })}
            />
          </Link>
        </div>
        <Link to="/">
          <p>Histórico</p>
        </Link>
      </div>
    </Footer>
  );
}
