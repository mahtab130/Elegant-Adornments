import { DOMAttributes, memo } from "react";

import { Button, ButtonBaseProps, ButtonTypeMap } from "@mui/material";

import { merge } from "lodash";
import { buttonSX } from "../../helper/styleObjects/controllers";

type TCustomButton = ButtonTypeMap<
  {
    text: string;
    customColor?: string;
  },
  "button"
>["props"] &
  ButtonBaseProps &
  DOMAttributes<unknown>;

export const CustomButton = memo<TCustomButton>(({ text, sx, ...props }) => {
  const mergeSx = merge({}, buttonSX, sx);

  return (
    <Button sx={mergeSx} {...props}>
      {text}
    </Button>
  );
});
