import { Button } from "./style";

import { useState } from "react";

export default function Day({
  id,
  toggleSelection,
  created,
  submited,
  alrSelected,
}) {
  const [selected, SetSelected] = useState(alrSelected);

  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <Button
      disabled={created || submited}
      onClick={() => {
        toggleSelection(id);
        SetSelected(!selected);
      }}
      selected={selected}
    >
      {days[id]}
    </Button>
  );
}
