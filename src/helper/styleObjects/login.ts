import { SxProps, Theme } from "@mui/material";

import {
  COLOR_WHITE,
  COLOR_TEXT_GRAY,
  COLOR_SECEONDRY,
  COLOR_TEXT_WHITE,
  COLOR_MEDIUM_GRAY,
} from "../constants/colors";
import {
  FONT_BODY_LARGE,
  FONT_WEIGHT_BLOD,
  FONT_LABEL_LARGE,
  FONT_LABEL_SMALL,
  FONT_LABEL_MEDIUM,
} from "../constants/fonts";
import {
  SPACE_D1,
  SPACE_M4,
  SPACE_D2,
  SPACE_S2,
  SPACE_M3,
  SPACE_S3,
} from "../constants/spaces";

import BackImage from "../../assets/images/login/back-login.webp";

export const loginSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${BackImage})`,
  "& .container": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: COLOR_WHITE,
    "& .inputs-wrapper": {
      width: "fit-content",
      maxWidth: "350px",
      "& .title-wrapper": {
        mb: SPACE_D1,
        width: "100%",
        "& .title": {
          fontSize: FONT_BODY_LARGE,
          fontWeight: FONT_WEIGHT_BLOD,
        },
        "& .subtitle": {
          color: COLOR_TEXT_GRAY,
          fontSize: FONT_LABEL_MEDIUM,
          fontWeight: FONT_WEIGHT_BLOD,
          "& span": {
            cursor: "pointer",
            color: COLOR_SECEONDRY,
            textDecoration: "underline",
          },
        },
      },
      "& .inputs": {
        width: "350px",
        display: "flex",
        rowGap: SPACE_M4,
        flexDirection: "column",
        "& .input": {
          "& .MuiInputBase-root": {
            height: "45px",
            borderRadius: "8px",
          },
        },
        "& .checkbox-wrapper": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "& .checkbox-wrapper": {
            width: "fit-content",
          },
          "& .forgot-pass-text": {
            color: COLOR_SECEONDRY,
            textDecoration: "underline",
            fontSize: FONT_LABEL_MEDIUM,
            fontWeight: FONT_WEIGHT_BLOD,
          },
        },
      },
      "& .buttons-wrapper": {
        mt: SPACE_D2,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        "& .button": {
          alignItems: "center",
          fontSize: FONT_LABEL_LARGE,
          "& span": {
            pr: SPACE_S2,
          },
        },
        "& .or": {
          my: SPACE_M3,
          position: "relative",
          textAlign: "center",
          "& .text": {
            p: SPACE_S3,
            zIndex: "33",
            position: "relative",
            color: COLOR_MEDIUM_GRAY,
            fontSize: FONT_LABEL_SMALL,
            backgroundColor: COLOR_WHITE,
          },
          "& .border": {
            zIndex: 0,
            height: "1px",
            width: "100%",
            left: "0",
            top: "13px",
            position: "absolute",
            backgroundColor: COLOR_TEXT_WHITE,
          },
        },
        "& .have-account": {
          mt: SPACE_M3,
          textAlign: "center",
          color: COLOR_TEXT_GRAY,
          fontSize: FONT_LABEL_MEDIUM,
          fontWeight: FONT_WEIGHT_BLOD,
          "& span": {
            cursor: "pointer",
            color: COLOR_SECEONDRY,
            textDecoration: "underline",
          },
        },
      },
    },
  },
};
