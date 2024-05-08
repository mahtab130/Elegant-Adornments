import { SxProps, Theme } from "@mui/material";

import { COLOR_PRIMARY, COLOR_SECEONDRY } from "../constants/colors";
import { FONT_BODY_SMALL, FONT_WEIGHT_BLOD } from "../constants/fonts";
import { SPACE_H2, SPACE_M2, SPACE_D2, SPACE_S1 } from "../constants/spaces";

export const navbarSX = (openCategoryPopper?: boolean): SxProps<Theme> => ({
  mx: "auto",
  px: SPACE_H2,
  py: SPACE_M2,
  top: SPACE_H2,
  zIndex: "3000",
  width: "1400px",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  borderRadius: "12px",
  animation: "fadeIn 1s",
  backgroundColor: COLOR_PRIMARY,
  justifyContent: "space-between",
  borderBottomRightRadius: openCategoryPopper ? "0" : undefined,
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
      position: "relative",
      fontSize: FONT_BODY_SMALL,
      fontWeight: FONT_WEIGHT_BLOD,
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
    position: "relative",
    alignItems: "flex-start",
    "& .icon-navbar": {
      zIndex: "33",
      cursor: "pointer",
      transition: "transform 0.4s",
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
  },
});
