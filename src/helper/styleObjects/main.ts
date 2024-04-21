import { SxProps, Theme } from "@mui/material";

import {
  COLOR_TEXT,
  COLOR_TITLE,
  COLOR_PRIMARY,
  COLOR_BACKGROUND,
} from "../constants/colors";
import {
  SPACE_L1,
  SPACE_S3,
  SPACE_S1,
  SPACE_L2,
  SPACE_L3,
} from "../constants/spaces";
import { FONT_HEADING_LARGE, FONT_BODY_MEDIUM } from "../constants/fonts";

import backgroundImage from "../../assets/images/background-image.webp";

export const layoutSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  overflow: "auto",
  display: "flex",
  justifyContent: "center",
};

export const homeSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "relative",
  justifyContent: "center",
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
  "& .container": {
    my: SPACE_L1,
    zIndex: "100",
    width: "100%",
    display: "flex",
    maxWidth: "1400px",
    position: "relative",
    flexDirection: "column",
    "& .texts-wrapper": {
      mt: SPACE_S3,
      pt: SPACE_L1,
      display: "flex",
      position: "relative",
      height: "fit-content",
      flexDirection: "column",
      justifyContent: "center",
      "& .back-image": {
        position: "absolute",
        top: "-50px",
        right: "60px",
        width: "250px",
        height: "250px",
      },
      "& .title": {
        fontWeight: "700",
        lineHeight: "90px",
        color: COLOR_TITLE,
        fontSize: FONT_HEADING_LARGE,
      },
      "& .subtitle": {
        mt: SPACE_S1,
        fontWeight: "400",
        fontSize: FONT_BODY_MEDIUM,
      },
      "& .button-wrapper": {
        mt: SPACE_L2,
        "& .button": {
          px: SPACE_L3,
          py: SPACE_S1,
          fontWeight: "700",
          lineHeight: "22px",
          color: COLOR_TEXT,
          borderRadius: "14px",
          fontSize: FONT_BODY_MEDIUM,
          textTransform: "capitalize",
          backgroundColor: COLOR_PRIMARY,
        },
      },
      "& .vector-arrow-img": {
        left: "70px",
        width: "470px",
        bottom: "-160px",
        position: "absolute",
      },
    },
  },
};
