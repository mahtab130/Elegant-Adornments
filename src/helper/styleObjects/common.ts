import { SxProps, Theme } from "@mui/material";

import { SPACE_L3, SPACE_M3, SPACE_S1, SPACE_S3 } from "../constants/spaces";
import { COLOR_BACKGROUND, COLOR_PRIMARY } from "../constants/colors";
import {
  FONT_BODY_MEDIUM,
  FONT_CAPTION_LARGE,
  FONT_LABEL_LARGE,
} from "../constants/fonts";

export const categoryCardSX: SxProps<Theme> = {
  px: SPACE_L3,
  width: "100%",
  display: "flex",
  maxHeight: "175px",
  borderRadius: "16px",
  alignItems: "center",
  justifyContent: "space-between",
  background:
    "linear-gradient(296.92deg, #568A9E 15.8%, #6A99AB 23.43%, #76A3B4 28.59%, #6D9FB1 35.91%, #6A9BAE 44.85%, #568A9E 59.37%, #568A9E 67.78%, #568A9E 75.24%, #568A9E 83.27%)",
  "& .title-wrapper": {
    py: SPACE_L3,
    display: "flex",
    gap: SPACE_S1,
    flexDirection: "column",
    "& .title": {
      fontSize: "24px",
      fontWeight: "700",
    },
    "& .vector": {
      width: "60px",
      height: "65px",
    },
  },
  "& .image": {
    height: "auto",
  },
};

export const productCardSX: SxProps<Theme> = {
  width: "100%",
  height: "auto",
  overflow: "hidden",
  borderRadius: "14px",
  boxShadow: "0px 1px 2px 0px #1018280D  ",
  "& .image-wrapper": {
    width: "100%",
    display: "flex",
    height: "370px",
    alignItems: "center",
    justifyContent: "center",
    background:
      " linear-gradient(154.68deg, #E7EDEF 24.32%, #FFFFFF 45.27%, #FFFFFF 56.96%, #E7EDEF 99.84%)",
    "& .image-product": {},
  },
  "& .texts-wrapper": {
    p: SPACE_M3,
    width: "100%",
    display: "flex",
    rowGap: SPACE_S1,
    flexDirection: "column",
    backgroundColor: COLOR_BACKGROUND,
    "& .title": {
      fontWeight: "700",
      fontSize: FONT_BODY_MEDIUM,
    },
    "& .price-wrapper": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& .add-to-cart": {
        pr: SPACE_S1,
        gap: SPACE_S3,
        display: "flex",
        fontWeight: "700",
        cursor: "pointer",
        position: "relative",
        alignItems: "center",
        fontSize: FONT_CAPTION_LARGE,
        zIndex: "2",
        "&:hover": {
          "&:before": {
            width: "100%",
            height: "40px",
            borderRadius: "50px",
          },
        },
        "& svg": {
          width: "12px",
          height: "12px",
        },
        "&:before": {
          top: "-12px",
          left: "-5px",
          zIndex: "-2",
          width: "40px",
          content: "''",
          height: "40px",
          display: "block",
          borderRadius: "50%",
          position: "absolute",
          transition: "all .4s ease",
          backgroundColor: COLOR_PRIMARY,
        },
      },
      "& .price": {
        fontWeight: "700",
        fontSize: FONT_LABEL_LARGE,
      },
    },
  },
};
