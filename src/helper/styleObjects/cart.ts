import { SxProps, Theme } from "@mui/material";

import {
  FONT_BODY_LARGE,
  FONT_BODY_SMALL,
  FONT_WEIGHT_BLOD,
} from "../constants/fonts";
import { MAX_WIDTH } from "../constants/static";
import { COLOR_TEXT_GRAY } from "../constants/colors";
import { SPACE_H3, SPACE_D2, SPACE_M1, SPACE_XS1 } from "../constants/spaces";

export const cartsSX: SxProps<Theme> = {
  width: "100%",
  "& .container": {
    mx: "auto",
    mt: SPACE_H3,
    pt: SPACE_H3,
    width: "100%",
    maxWidth: MAX_WIDTH,
    "& .image-wrapper": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& .carts-image": {
        width: "300px",
        height: "300px",
      },
      "& .text": {
        color: COLOR_TEXT_GRAY,
        fontSize: FONT_BODY_LARGE,
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
    "& .coupon-wrapper": {
      display: "flex",
      alignItems: "end",
      my: SPACE_D2,
      justifyContent: "space-between",
      "& .textfield-wrapper": {
        width: "100%",
        "& .MuiInputBase-root": {
          "& fieldset": {
            border: undefined,
          },
          "&:hover": {
            "& fieldset": {
              borderColor: "rgb(0,0,0,0.23)",
            },
          },
          "&.Mui-focused": {
            "& fieldset": {
              border: "1px solid rgb(0,0,0,0.23)",
            },
          },
        },
      },
      "& .button": {
        width: "100%",
      },
    },
    "& .other-product": {
      width: "100%",
      mt: SPACE_H3,
      mb: SPACE_D2,
      "& .other-product-wrapper": {
        mt: SPACE_D2,
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        rowGap: SPACE_M1,
        justifyContent: "space-between",
      },
    },
  },
};

export const quantityComponentSX: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: SPACE_XS1,
  "& span": {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    transition: "all 0.3s",
    "& svg": {
      width: "12px",
      height: "12px",
    },
    "&:hover": {
      transform: "scale(1.3)",
    },
  },
  "& .quantity": {
    color: "#686868",
    fontSize: FONT_BODY_SMALL,
    fontWeight: FONT_WEIGHT_BLOD,
  },
};
