import { Button } from "./style";

import { useState } from "react";

export default function Day({ id }) {
  const [selected, SetSelected] = useState(false);

  const days = ["S", "T", "Q", "Q", "S", "S", "D"];

  return (
    <Button
      onClick={() => {
        SetSelected(!selected);
      }}
      selected={selected}
    >
      {days[id - 1]}
    </Button>
  );
}
