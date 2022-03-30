import { Header } from "./style";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Top() {
  const { userInfo } = useContext(UserContext);

  return (
    <Header>
      <div>
        <p>TrackIt</p>
        <img src={userInfo.image} alt="" />
      </div>
    </Header>
  );
}
