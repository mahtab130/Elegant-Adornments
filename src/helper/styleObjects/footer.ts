import { SxProps, Theme } from "@mui/material";

import {
  COLOR_WHITE,
  COLOR_PRIMARY,
  COLOR_SECEONDRY,
  COLOR_LIGHT_GRAY,
} from "../constants/colors";
import {
  FONT_BODY_SMALL,
  FONT_LABEL_LARGE,
  FONT_BODY_MEDIUM2,
  FONT_WEIGHT_BLOD,
} from "../constants/fonts";
import {
  SPACE_H2,
  SPACE_D2,
  SPACE_M1,
  SPACE_M3,
  SPACE_H3,
  SPACE_H1,
} from "../constants/spaces";

export const footerSX: SxProps<Theme> = {
  py: SPACE_D2,
  mt: SPACE_H2,
  px: { xs: "12px", md: SPACE_H3 },
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: COLOR_SECEONDRY,

  "& .content": {
    width: "100%",
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    gap: { xs: "20px", md: 0 },
    "& .social-content": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: { xs: "center", md: "unset" },
      rowGap: "20px",
      "& .logo": {
        width: "150px",
      },
      "& .description": {
        fontWeight: FONT_WEIGHT_BLOD,
        lineHeight: SPACE_M3,
        color: COLOR_LIGHT_GRAY,
        fontSize: FONT_LABEL_LARGE,
        textAlign: { xs: "center", md: "unset" },
      },
      "& .socail-boxes": {
        width: "230px",
        display: "flex",
        "& .social-box": {
          m: "auto",
          width: "40px",
          height: "40px",
          display: "flex",
          cursor: "pointer",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLOR_PRIMARY,
          "&:hover": {
            "& svg": {
              transition: "all 0.4s",
              transform: "scale(1.2)",
            },
          },
        },
      },
    },
    "& .navigation-content": {
      gap: "14px",
      display: { xs: "none", md: "flex" },
      flexDirection: "column",

      "& .title": {
        lineHeight: SPACE_H1,
        fontWeight: FONT_WEIGHT_BLOD,
        color: COLOR_WHITE,
        fontSize: FONT_BODY_MEDIUM2,
      },
      "& .text": {
        cursor: "pointer",
        fontWeight: FONT_WEIGHT_BLOD,
        transition: "all 0.4s",
        color: COLOR_LIGHT_GRAY,
        fontSize: FONT_LABEL_LARGE,
        "&:hover": {
          color: COLOR_PRIMARY,
        },
      },
    },

    "& .send-email-content": {
      "& .title": {
        mb: SPACE_M1,
        fontWeight: FONT_WEIGHT_BLOD,
        color: COLOR_WHITE,
        fontSize: FONT_BODY_MEDIUM2,
      },
      "& .email-input": {
        "& .MuiInputBase-root": {
          backgroundColor: COLOR_WHITE,
        },
      },
    },
  },
  "& .copyright-text": {
    mt: { xs: "18px", md: SPACE_D2 },
    pt: { xs: "12px", md: SPACE_D2 },
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
    borderTop: "1px solid" + COLOR_PRIMARY,
    alignItems: { xs: "center", md: "unset" },
    "& .text": {
      display: "flex",
      fontWeight: FONT_WEIGHT_BLOD,
      gap: "4px",
      alignItems: "center",
      color: COLOR_LIGHT_GRAY,
      fontSize: { xs: "16px", md: FONT_BODY_SMALL },
      "& span": {
        color: COLOR_PRIMARY,
      },
      "& .icon": {
        height: "18px",
      },
    },
  },
};
