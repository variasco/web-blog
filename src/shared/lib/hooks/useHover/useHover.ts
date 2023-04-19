import { useCallback, useMemo, useState } from "react";

interface HoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type HoverResult = [boolean, HoverBind];

export const useHover = () => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  return useMemo<HoverResult>(
    () => [hover, { onMouseEnter, onMouseLeave }],
    [hover, onMouseEnter, onMouseLeave]
  );
};
