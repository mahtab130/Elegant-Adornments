import { SxProps, Theme } from "@mui/material";

import { COLOR_BACKGROUND } from "../constants/colors";

import backgroundImage from "../../assets/images/background-image.webp";

export const homeSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& .home-wrapper": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    backgroundColor: COLOR_BACKGROUND,
    "& .background-image": {
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundSize: "cover",
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "right",
      backgroundRepeat: "no-repeat",
    },
  },
};
