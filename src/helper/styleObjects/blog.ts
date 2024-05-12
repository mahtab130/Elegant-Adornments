import { SxProps, Theme } from "@mui/material";

import {
  SPACE_M1,
  SPACE_M4,
  SPACE_H3,
  SPACE_H2,
  SPACE_M2,
  SPACE_D2,
  SPACE_S2,
  SPACE_XM1,
} from "../constants/spaces";
import {
  FONT_BODY_SMALL,
  FONT_BODY_LARGE,
  FONT_WEIGHT_BLOD,
  FONT_TITLE_LARGE,
  FONT_BODY_MEDIUM2,
} from "../constants/fonts";
import { MAX_WIDTH } from "../constants/static";
import { COLOR_TEXT, COLOR_SECEONDRY, COLOR_WHITE } from "../constants/colors";

export const contentBlogSX: SxProps<Theme> = {
  width: "100%",
  "& .description": {
    mb: SPACE_M1,
    mt: SPACE_M1,
    width: "100%",
    color: "#6A6A6A",
    fontSize: FONT_BODY_MEDIUM2,
    fontWeight: FONT_WEIGHT_BLOD,
  },
  "& .title": {
    mt: SPACE_M1,
    fontSize: FONT_BODY_LARGE,
    fontWeight: FONT_WEIGHT_BLOD,
  },
  "& .bullet-point-wrapper": {
    mt: SPACE_M4,
    display: "flex",
    flexDirection: "column",
    "& .text": {
      color: "#6A6A6A",
      lineHeight: "22px",
      fontSize: FONT_BODY_MEDIUM2,
      fontWeight: FONT_WEIGHT_BLOD,
      "&.black": {
        color: COLOR_TEXT,
      },
      "& span": {
        width: "6px",
        height: "6px",
        backgroundColor: COLOR_SECEONDRY,
        borderRadius: "50%",
      },
    },
  },
  "& .image1-wrapper": {
    width: "100%",
    display: "flex",
    mt: SPACE_M1,
    justifyContent: "center",
    "& .image": {
      width: "700px",
    },
  },
  "& .image2-wrapper": {
    width: "100%",
    display: "flex",
    mt: SPACE_M1,
    justifyContent: "space-between",
    "& .image": {
      width: "100%",
      height: "480px",
    },
  },
};

export const blogDetailSX = (image?: string): SxProps<Theme> => ({
  mx: "auto",
  pt: SPACE_H3,
  my: SPACE_H2,
  width: "100%",
  maxWidth: MAX_WIDTH,
  "& .container": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& .image-background": {
      width: "100%",
      mt: SPACE_M2,
      px: SPACE_H3,
      height: "450px",
      display: "flex",
      borderRadius: "12px",
      alignItems: "center",
      backgroundSize: "cover",
      justifyContent: "center",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      background: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 100%,rgba(0, 0, 0, 0.65) 100%), url(${image})`,
      "& .title": {
        color: COLOR_WHITE,
        textAlign: "center",
        fontSize: FONT_TITLE_LARGE,
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
    "& .description": {
      width: "100%",
      mt: SPACE_M1,
      fontSize: FONT_BODY_MEDIUM2,
      fontWeight: FONT_WEIGHT_BLOD,
      color: "#6A6A6A",
      mb: SPACE_M1,
    },
    "& .other-info-wrapper": {
      mt: SPACE_M2,
      display: "flex",
      gap: SPACE_D2,
      alignItems: "center",
      "& .item": {
        gap: SPACE_S2,
        display: "flex",
        alignItems: "center",
        "& .name": {
          color: "#939393",
          fontSize: FONT_BODY_SMALL,
          fontWeight: FONT_WEIGHT_BLOD,
        },
      },
    },
  },
});

export const blogSX: SxProps<Theme> = {
  width: "100%",
  "& .container-body": {
    "& .animaiton": {
      width: "fit-content",
    },
    mx: "auto",
    my: SPACE_H3,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    rowGap: SPACE_XM1,
    justifyContent: "space-between",
    maxWidth: `calc(${MAX_WIDTH} + -80px)`,
    "& .pagination-wrapper": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
};
