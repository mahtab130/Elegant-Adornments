import { SxProps, Theme } from "@mui/material";

import { COLOR_SECEONDRY } from "../constants/colors";
import { SPACE_H3, SPACE_D1, SPACE_S1 } from "../constants/spaces";

export const searchSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  backgroundColor: COLOR_SECEONDRY,
  "& .container": {
    mt: SPACE_H3,
    pt: SPACE_H3,
    width: "100%",
    display: "flex",
    maxWidth: "1080px",
    flexDirection: "column",
    "& .textfield-wrapper": {
      width: "100%",
      "& span": {
        pr: SPACE_S1,
      },
    },
    "& .products-wrapper": {
      mt: SPACE_D1,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
};
