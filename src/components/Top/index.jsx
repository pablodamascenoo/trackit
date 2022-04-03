import { Header } from "./style";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Top() {
  const { userInfo } = useContext(UserContext);

  return (
    <Header imageUrl={userInfo !== null ? userInfo.image : ""}>
      <div>
        <p>TrackIt</p>
        <div></div>
      </div>
    </Header>
  );
}
