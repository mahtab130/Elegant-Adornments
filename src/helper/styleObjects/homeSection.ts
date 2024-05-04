import { SxProps, Theme } from "@mui/material";

import {
  SPACE_H2,
  SPACE_XS1,
  SPACE_D2,
  SPACE_XM1,
  SPACE_M2,
  SPACE_S2,
  SPACE_M3,
  SPACE_H3,
  SPACE_D1,
} from "../constants/spaces";
import {
  COLOR_WHITE,
  COLOR_PRIMARY,
  COLOR_SECEONDRY,
  COLOR_BACKGROUND,
  COLOR_TEXT_WHITE,
} from "../constants/colors";
import {
  FONT_BODY_LARGE,
  FONT_LABEL_LARGE,
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
  FONT_HEADING_LARGE,
} from "../constants/fonts";

import backgroundImage from "../../assets/images/home/background-image.webp";
import { MAX_WIDTH } from "../constants/static";

export const homeSectionSX: SxProps<Theme> = {
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
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backgroundImage})`,
  },
  "& .container": {
    mx: "auto",
    my: SPACE_H2,
    zIndex: "100",
    width: "100%",
    height: "100vh",
    display: "flex",
    maxWidth: MAX_WIDTH,
    position: "relative",
    flexDirection: "column",
    "& .texts-wrapper": {
      mt: SPACE_H3,
      pt: SPACE_H2,
      display: "flex",
      position: "relative",
      height: "fit-content",
      flexDirection: "column",
      justifyContent: "center",
      "& .back-image": {
        position: "absolute",
        top: "-60px",
        right: "120px",
        width: "250px",
        height: "250px",
      },
      "& .title": {
        lineHeight: "90px",
        color: COLOR_WHITE,
        animation: "1s ease-out 0s 1 slideInLeft",
        fontWeight: FONT_WEIGHT_BLOD,
        fontSize: FONT_HEADING_LARGE,
      },
      "& .subtitle": {
        mt: SPACE_XS1,
        color: COLOR_TEXT_WHITE,
        fontSize: FONT_BODY_MEDIUM2,
      },
      "& .button-wrapper": {
        mt: SPACE_D2,
        zIndex: "22",
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
    zIndex: "0",
    width: "780px",
    height: "580px",
    position: "absolute",
    backgroundColor: COLOR_PRIMARY,
  },
  "& .products-container": {
    width: "100%",
    maxWidth: MAX_WIDTH,
    zIndex: "1",
    "& .product-cards-wrapper": {
      mt: SPACE_XM1,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
};

export const categorySectionSX: SxProps<Theme> = {
  width: "100%",
  my: SPACE_H2,
  display: "flex",
  minHeight: "530px",
  justifyContent: "center",
  "& .category-container": {
    width: "100%",
    display: "flex",
    maxWidth: MAX_WIDTH,
    height: "fit-content",
    flexDirection: "column",
    "& .category-cards-wrapper": {
      display: "flex",
      justifyContent: "space-between",
      mt: SPACE_H2,
      rowGap: SPACE_M2,
    },
  },
};

export const bestSellingSectionSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: COLOR_SECEONDRY,
  "& .container": {
    zIndex: "1",
    width: "100%",
    maxWidth: MAX_WIDTH,
    "& .product-cards-wrapper": {
      mt: SPACE_XM1,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
};

export const blogSX: SxProps<Theme> = {
  m: "auto",
  width: "100%",
  height: "100vh",
  display: "flex",
  maxWidth: MAX_WIDTH,
  flexDirection: "column",
  justifyContent: "center",
};

export const contentServicesSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  mt: SPACE_XS1,
  rowGap: "14px",
  "& .item": {
    display: "flex",
    justifyContent: "space-between",
    "&:last-child": {
      "& .number-wrapper:before": {
        display: "none",
      },
    },
    "& .number-wrapper": {
      position: "relative",
      "&:before": {
        height: "45px",
        content: '""',
        top: "52px",
        left: "24px",
        width: "1px",
        borderRight: "1px dashed" + COLOR_SECEONDRY,
        position: "absolute",
      },
      "& .number": {
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        border: "1px dashed" + COLOR_SECEONDRY,
        "& span": {
          width: "40px",
          height: "40px",
          fontWeight: FONT_WEIGHT_BLOD,
          color: COLOR_WHITE,
          textAlign: "center",
          borderRadius: "50%",
          fontSize: FONT_BODY_LARGE,
          backgroundColor: COLOR_SECEONDRY,
        },
      },
    },
    "& .texts-wrapper": {
      mt: SPACE_XS1,
      display: "flex",
      flexDirection: "column",
      rowGap: SPACE_S2,
      "& .title": {
        fontSize: FONT_BODY_MEDIUM2,
        fontWeight: FONT_WEIGHT_BLOD,
      },
      "& .description": {
        lineHeight: SPACE_M3,
        fontSize: FONT_LABEL_LARGE,
      },
    },
  },
};

export const aboutUsSectionSX: SxProps<Theme> = {
  "& .right-section": {
    "& .vector": {
      right: "-130px",
      top: "-70px",
    },
  },
  "& .description": {
    mt: SPACE_M2,
    lineHeight: "22px",
    fontSize: FONT_BODY_MEDIUM2,
  },
  "& .button": {
    mt: SPACE_D2,
    px: SPACE_D1,
    py: SPACE_XS1,
    "&:hover": {
      color: COLOR_SECEONDRY,
      outline: "1px solid" + COLOR_SECEONDRY,
    },
  },
};
