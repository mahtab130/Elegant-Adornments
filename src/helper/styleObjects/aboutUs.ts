import { SxProps, Theme } from "@mui/material";

import { FONT_BODY_MEDIUM2 } from "../constants/fonts";
import { SPACE_H2, SPACE_M1 } from "../constants/spaces";

export const AboutUsSX: SxProps<Theme> = {
  width: "100%",
  "& .second-section": {
    py: SPACE_H2,
    "& .description": {
      mt: SPACE_M1,
      fontSize: FONT_BODY_MEDIUM2,
      lineHeight: "25px",
    },
    "& .vector-wrapper": {
      width: "100%",
      height: "130px",
      position: "relative",
      "&.two": {
        justifyContent: "flex-start",
      },
      "& .vector-one": {
        top: "-20px",
        right: "-30px",
        width: "460px",
        position: "absolute",
      },
      "& .vector-two": {
        width: "390px",
        left: "-90px",
        top: "0px",
        position: "absolute",
        transform: "scaleX(-0.9)",
      },
    },
  },
};
