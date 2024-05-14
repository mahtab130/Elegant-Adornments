import { DOMAttributes, memo } from "react";

import { merge } from "lodash";
import {
  Theme,
  Button,
  SxProps,
  ButtonTypeMap,
  ButtonBaseProps,
} from "@mui/material";

import {
  COLOR_TEXT,
  COLOR_WHITE,
  COLOR_PRIMARY,
  COLOR_SECEONDRY,
  COLOR_TEXT_GRAY,
  COLOR_TEXT_WHITE,
} from "../../helper/constants/colors";
import {
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
} from "../../helper/constants/fonts";
import { SPACE_D1, SPACE_XS1, SPACE_M2 } from "../../helper/constants/spaces";

export type TCustomButton = ButtonTypeMap<
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

const buttonSX = (customColor?: string): SxProps<Theme> => ({
  px: SPACE_D1,
  py: SPACE_XS1,
  fontWeight: FONT_WEIGHT_BLOD,
  lineHeight: SPACE_M2,
  boxShadow: "none",
  borderRadius: "14px",
  fontSize: FONT_BODY_MEDIUM2,
  textTransform: "capitalize",
  outline: "1px solid transparent",
  "&.MuiButton-contained": {
    transition: "0.3s",
    color: customColor === COLOR_SECEONDRY ? COLOR_WHITE : COLOR_TEXT,
    background: customColor,
    border: `1px solid transparent`,
    "&:hover": {
      boxShadow: "none",
      color: customColor ?? COLOR_PRIMARY,
      backgroundColor: "transparent",
      outline: "1px solid " + (customColor ?? COLOR_PRIMARY),
    },
  },
  "&.MuiButton-outlined": {
    color: customColor,
    backgroundColor: COLOR_WHITE,
    border: `1px solid ${
      customColor == COLOR_TEXT_GRAY ? COLOR_TEXT_WHITE : customColor
    }`,
    "&:hover": {
      backgroundColor: `${customColor}10`,
    },
  },
});
