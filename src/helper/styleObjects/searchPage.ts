import { SxProps, Theme } from "@mui/material";

import { COLOR_SECEONDRY } from "../constants/colors";
import { SPACE_H3, SPACE_D1 } from "../constants/spaces";

export const searchSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
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
    },
    "& .products-wrapper": {
      mt: SPACE_D1,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
};
