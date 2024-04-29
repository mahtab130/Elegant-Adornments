import { SxProps, Theme } from "@mui/material";

import { COLOR_PRIMARY, COLOR_SECEONDRY } from "../constants/colors";
import { FONT_BODY_SMALL, FONT_WEIGHT_BLOD } from "../constants/fonts";
import { SPACE_H2, SPACE_M2, SPACE_D2, SPACE_S1 } from "../constants/spaces";

export const navbarSX: SxProps<Theme> = {
  px: SPACE_H2,
  py: SPACE_M2,
  zIndex: "3000",
  width: "1400px",
  display: "flex",

  alignItems: "center",
  borderRadius: "12px",
  animation: "fadeIn 1s",
  justifyContent: "space-between",
  backgroundColor: COLOR_PRIMARY,
  "& .logo-wrapper": {
    "& .logo": {
      width: "120px",
      height: "30px",
    },
  },
  "& .nav-list-wrapper": {
    gap: SPACE_D2,
    display: "flex",

    "& .navbar-value-name": {
      zIndex: "20",
      cursor: "pointer",
      fontWeight: FONT_WEIGHT_BLOD,
      position: "relative",
      fontSize: FONT_BODY_SMALL,
      "&.active": {
        "&:before": {
          transform: " scaleX(1)",
          transformOrigin: "bottom left",
        },
      },
      "&:hover ": {
        "&:before": {
          transform: " scaleX(1)",
          transformOrigin: "bottom left",
        },
      },
      "&:before": {
        content: "''",
        width: "100%",
        height: "2px",
        display: "block",
        position: "absolute",
        right: 0,
        bottom: "-2px",
        zIndex: "-1",
        transform: " scaleX(0)",
        background: COLOR_SECEONDRY,
        transition: "transform .3s ease",
        transformOrigin: "bottom right",
      },
    },
  },
  "& .actions-wrapper": {
    gap: SPACE_S1,
    display: "flex",
    alignItems: "center",
    "& .icon-navbar": {
      cursor: "pointer",
      transition: "transform 0.4s",
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
  },
};
