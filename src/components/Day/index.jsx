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

  const days = ["S", "T", "Q", "Q", "S", "S", "D"];

  return (
    <Button
      disabled={created || submited}
      onClick={() => {
        toggleSelection(id);
        SetSelected(!selected);
      }}
      selected={selected}
    >
      {days[id - 1]}
    </Button>
  );
}
