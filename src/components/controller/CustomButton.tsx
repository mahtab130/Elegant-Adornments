import { DOMAttributes, memo } from "react";

import { Button, ButtonBaseProps, ButtonTypeMap } from "@mui/material";

type TCustomButton = ButtonTypeMap<
  {
    text: string;
    customColor?: string;
  },
  "button"
>["props"] &
  ButtonBaseProps &
  DOMAttributes<unknown>;

export const CustomButton = memo<TCustomButton>(({ text, ...props }) => {
  return <Button {...props}>{text}</Button>;
});
