import { SxProps, Theme } from "@mui/material";
import {
  SPACE_D1,
  SPACE_H1,
  SPACE_H2,
  SPACE_H3,
  SPACE_M1,
  SPACE_M2,
  SPACE_M3,
} from "../constants/spaces";
import { FONT_BODY_MEDIUM1, FONT_WEIGHT_BLOD } from "../constants/fonts";
import { MAX_WIDTH } from "../constants/static";

export const userViewSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  "& .content-view": {
    mt: SPACE_D1,
    display: "flex",
    gap: SPACE_M2,
    flexDirection: "column",
    "& .box-item": {
      display: "flex",
      gap: SPACE_D1,
      "& p": {
        fontSize: FONT_BODY_MEDIUM1,
      },
      "& .value": {
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
    "& .button-wrapper": {
      mt: SPACE_M1,
    },
  },
};
export const userEditSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "& .content": {
    my: SPACE_H2,
    width: "100%",
    maxWidth: MAX_WIDTH,
    pt: SPACE_H3,
    "& .form": {
      mt: SPACE_H1,
      "& .form-content": {
        my: SPACE_M2,
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: SPACE_M3,
      },
      "& .textfield-wrapper": {
        width: "100%",
      },
    },
  },
};
