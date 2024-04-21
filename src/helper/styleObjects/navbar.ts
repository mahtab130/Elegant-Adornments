import { SxProps, Theme } from "@mui/material";

import { COLOR_PRIMARY } from "../constants/colors";
import { FONT_BODY_SMALL } from "../constants/fonts";
import { SPACE_L1, SPACE_M2, SPACE_L2, SPACE_S2 } from "../constants/spaces";

export const navbarSX: SxProps<Theme> = {
  px: SPACE_L1,
  py: SPACE_M2,
  width: "100%",
  display: "flex",
  alignItems: "center",
  borderRadius: "12px",
  justifyContent: "space-between",
  backgroundColor: COLOR_PRIMARY,
  "& .logo-wrapper": {
    "& .logo": {
      width: "120px",
      height: "30px",
    },
  },
  "& .nav-list-wrapper": {
    gap: SPACE_L2,
    display: "flex",
    "& .navbar-value-name": {
      fontWeight: "700",
      fontSize: FONT_BODY_SMALL,
    },
  },
  "& .actions-wrapper": {
    gap: SPACE_S2,
    display: "flex",
  },
};
