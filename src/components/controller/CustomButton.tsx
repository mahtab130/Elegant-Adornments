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

export const CustomButton = memo<TCustomButton>(
  ({ text, sx, customColor, ...props }) => {
    const mergeSx = merge({}, buttonSX(customColor), sx);

    return (
      <Button sx={mergeSx} {...props}>
        {text}
      </Button>
    );
  }
);
