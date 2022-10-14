import { useState } from "react";
import { useUpdateEffect } from "usehooks-ts";

export const useButtonState = (errors: Record<string, unknown> = {}) => {
  const isError = Object.values(errors).length > 0;

  const [disableButton, setDisableButton] = useState(false);

  useUpdateEffect(() => {
    setDisableButton(isError);
  }, [isError]);

  return disableButton;
};
