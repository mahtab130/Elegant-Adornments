import { SxProps, Theme } from "@mui/material";

import {
  FONT_TITLE_SMALL,
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
} from "../constants/fonts";
import {
  SPACE_H3,
  SPACE_H1,
  SPACE_D1,
  SPACE_M4,
  SPACE_M2,
  SPACE_XM1,
} from "../constants/spaces";
import { MAX_WIDTH } from "../constants/static";
import { COLOR_TEXT, COLOR_WHITE } from "../constants/colors";

export const productSX: SxProps<Theme> = {
  width: "100%",
  mx: "auto",
  "& .background": {
    width: "100%",
    height: "100vh",
    position: "absolute",
    background: `linear-gradient(to left, #E7EDEF 50%, white 50%)`,
  },
  "& .container": {
    mx: "auto",
    pt: SPACE_H3,
    width: "100%",
    zIndex: "1111",
    height: "100vh",
    maxWidth: MAX_WIDTH,
    position: "relative",
    "& .product": {
      width: "100%",
      height: "100%",
      pt: SPACE_H1,
      "& .title": {
        fontSize: FONT_TITLE_SMALL,
        fontWeight: FONT_WEIGHT_BLOD,
        my: SPACE_D1,
      },
      "& .image-wrapper": {
        width: "100%",
        height: "300px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        "& .image": {
          width: "200px",
          position: "absolute",
        },
      },
    },
    "& .price-box": {
      px: SPACE_D1,
      mt: SPACE_H1,
      "& .properties-wrapper": {
        mt: SPACE_H3,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: SPACE_M4,
        "& .item-box": {
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          "& .item": {
            color: "#686868",
            fontSize: FONT_BODY_MEDIUM2,
            fontWeight: FONT_WEIGHT_BLOD,
          },
          "& .properties": {
            color: "#686868",
            fontSize: FONT_BODY_MEDIUM2,
            fontWeight: FONT_WEIGHT_BLOD,
          },
          "& .price": {
            color: COLOR_TEXT,
            fontSize: FONT_BODY_MEDIUM2,
            fontWeight: FONT_WEIGHT_BLOD,
          },
        },
      },
      "& .rating": {
        color: COLOR_TEXT,
        my: SPACE_M2,
      },
      "& .button-wrapper": {
        my: SPACE_D1,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        "& .button": {
          borderRadius: "8px",
        },
      },
      "& .textfield": {
        "& .MuiInputBase-root": {
          borderRadius: "8px",
          backgroundColor: COLOR_WHITE,
        },
      },
    },
  },
  "& .other-products": {
    width: "100%",
    height: "100%",
    my: SPACE_H3,
    mx: "auto",
    maxWidth: MAX_WIDTH,
    "& .product-cards-wrapper": {
      mt: SPACE_XM1,
      width: "100%",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: { xs: "center", md: "space-between" },
    },
  },
};
