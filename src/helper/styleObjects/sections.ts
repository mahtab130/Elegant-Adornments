import { SxProps, Theme } from "@mui/material";

import {
  SPACE_L1,
  SPACE_S1,
  SPACE_L2,
  SPACE_L3,
  SPACE_M1,
  SPACE_M2,
} from "../constants/spaces";
import { FONT_BODY_MEDIUM, FONT_HEADING_LARGE } from "../constants/fonts";
import { COLOR_TEXT, COLOR_TITLE, COLOR_PRIMARY } from "../constants/colors";

export const homeSectionSX: SxProps<Theme> = {
  "&.container": {
    my: SPACE_L1,
    zIndex: "100",
    width: "100%",
    height: "100vh",
    display: "flex",
    maxWidth: "1400px",
    position: "relative",
    flexDirection: "column",
    "& .texts-wrapper": {
      mt: SPACE_L3,
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
        zIndex: "22",
        "& .button": {
          px: SPACE_L3,
          py: SPACE_S1,
          fontWeight: "700",
          lineHeight: "22px",
          color: COLOR_TEXT,
          borderRadius: "14px",
          fontSize: FONT_BODY_MEDIUM,
          textTransform: "capitalize",
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

export const productSectionSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  "& .color-background": {
    top: "0",
    left: "0",
    zIndex: "-22",
    width: "780px",
    height: "580px",
    position: "absolute",
    backgroundColor: COLOR_PRIMARY,
  },
  "& .products-container": {
    width: "100%",
    maxWidth: "1400px",
    "& .product-cards-wrapper": {
      mt: SPACE_M1,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
};

export const categorySectionSX: SxProps<Theme> = {
  width: "100%",
  my: SPACE_L1,
  display: "flex",
  minHeight: "600px",
  justifyContent: "center",
  "& .category-container": {
    width: "100%",
    display: "flex",
    maxWidth: "1400px",
    height: "fit-content",
    flexDirection: "column",
    "& .category-cards-wrapper": {
      display: "flex",
      justifyContent: "space-between",
      mt: SPACE_L1,
      rowGap: SPACE_M2,
    },
  },
};
