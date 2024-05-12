import { SxProps, Theme } from "@mui/material";
import { COLOR_BACKGROUND } from "../constants/colors";

export const mainLayoutSX: SxProps<Theme> = {
  width: "100%",
  backgroundColor: COLOR_BACKGROUND,
  position: "relative",
  "& .navbar-wrapper": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
};

export const homeSX: SxProps<Theme> = {
  width: "100%",
  backgroundColor: COLOR_BACKGROUND,
};
