import { SxProps, Theme } from "@mui/material";

import {
  SPACE_H2,
  SPACE_D1,
  SPACE_M2,
  SPACE_M3,
  SPACE_XS1,
  SPACE_S2,
  SPACE_M4,
} from "../constants/spaces";
import {
  COLOR_TEXT,
  COLOR_GRAY,
  COLOR_WHITE,
  COLOR_PRIMARY,
  COLOR_SECEONDRY,
  COLOR_BACKGROUND,
  COLOR_TEXT_WHITE,
} from "../constants/colors";
import {
  FONT_LABEL_LARGE,
  FONT_WEIGHT_BLOD,
  FONT_TITLE_SMALL,
  FONT_BODY_MEDIUM2,
  FONT_BODY_MEDIUM1,
  FONT_CAPTION_LARGE,
  FONT_HEADING_XLARGE,
  FONT_BODY_SMALL,
} from "../constants/fonts";
import { MAX_WIDTH } from "../constants/static";

export const categoryCardSX: SxProps<Theme> = {
  px: SPACE_D1,
  width: "100%",
  display: "flex",
  cursor: "pointer",
  maxHeight: "175px",
  overflow: "hidden",
  borderRadius: "16px",
  position: "relative",
  transition: "all 0.6s",
  justifyContent: "space-between",
  background:
    "linear-gradient(296.92deg, #568A9E 15.8%, #6A99AB 23.43%, #76A3B4 28.59%, #6D9FB1 35.91%, #6A9BAE 44.85%, #568A9E 59.37%, #568A9E 67.78%, #568A9E 75.24%, #568A9E 83.27%)",
  "&:hover": {
    transform: "translateY(-10px)",
  },
  "& .title-wrapper": {
    py: SPACE_D1,
    display: "flex",
    gap: SPACE_XS1,
    flexDirection: "column",
    "& .title": {
      fontSize: FONT_BODY_MEDIUM1,
      fontWeight: FONT_WEIGHT_BLOD,
      color: COLOR_WHITE,
    },
    "& .vector": {
      left: "-15px",
      width: "110px",
      height: "110px",
      bottom: "-15px",
      position: "absolute",
    },
  },
  "& .image": {
    height: "175px",
  },
};

export const productCardSX = (
  variant: IProductCard["variant"]
): SxProps<Theme> => ({
  width: "100%",
  height: "auto",
  overflow: "hidden",
  cursor: "pointer",
  borderRadius: "14px",
  boxShadow: variant == "cart" ? "none" : "0px 1px 2px 0px #1018280D  ",
  "&:hover": {
    "& .texts-wrapper": {
      "& .price-wrapper": {
        "& .add-to-cart": {
          "&:before": {
            width: "100%",
            height: "40px",
            borderRadius: "50px",
          },
        },
      },
    },
    "& .image-wrapper": {
      "& .image-product": {
        transform: "scale(1.13)",
      },
    },
  },
  "& .image-wrapper": {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height:
      variant == "sale"
        ? "350px"
        : variant == "search" || variant == "cart"
        ? "320px"
        : " 370px",
    borderRadius:
      variant == "sale" || variant == "search" || variant == "cart"
        ? "14px"
        : "0px",
    background:
      variant == "category"
        ? "linear-gradient(154.68deg, #E7EDEF 24.32%, #E7EDEF 99.84%)"
        : " linear-gradient(154.68deg, #E7EDEF 24.32%, #FFFFFF 45.27%, #FFFFFF 56.96%, #E7EDEF 99.84%)",
    "& .image-product": {
      height: "300px",
      transition: "all .4s ease",
    },
  },
  "& .texts-wrapper": {
    p: SPACE_M3,
    width: "100%",
    display: "flex",
    textAlign: variant == "search" || variant == "cart" ? "center" : "unset",
    rowGap: variant == "sale" ? SPACE_S2 : SPACE_M3,
    flexDirection: "column",
    backgroundColor:
      variant == "sale" || variant == "search"
        ? COLOR_SECEONDRY
        : COLOR_BACKGROUND,
    "& .title": {
      color:
        variant == "sale" || variant == "search" ? COLOR_WHITE : COLOR_TEXT,
      fontWeight: FONT_WEIGHT_BLOD,
      fontSize: FONT_BODY_MEDIUM2,
    },
    "& .price-wrapper": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& .add-to-cart": {
        pr: SPACE_M3,
        gap: SPACE_S2,
        display: "flex",
        fontWeight: FONT_WEIGHT_BLOD,
        cursor: "pointer",
        position: "relative",
        alignItems: "center",
        fontSize: FONT_CAPTION_LARGE,
        zIndex: "2",
        "& svg": {
          width: "12px",
          height: "12px",
        },
        "&:before": {
          top: "-11px",
          left: "-8px",
          zIndex: "-2",
          width: "40px",
          content: "''",
          height: "40px",
          display: "block",
          borderRadius: "50%",
          position: "absolute",
          transition: "all .4s ease",
          backgroundColor: COLOR_PRIMARY,
        },
      },
      "& .price": {
        color: variant == "sale" ? COLOR_WHITE : COLOR_TEXT,
        fontWeight: FONT_WEIGHT_BLOD,
        fontSize: FONT_LABEL_LARGE,
      },
    },
  },
});

export const blogCardSX: SxProps<Theme> = {
  width: "100%",
  height: "auto",
  maxWidth: "400px",
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "10px",
  "&:hover": {
    "& .image-wrapper": {
      "& .blog-image": {
        transform: "scale(1.1)",
      },
    },
  },
  boxShadow: "0px 4px 24px 4px #B5B5B51F , 0px 4px 24px 4px #B5B5B51F",
  "& .image-wrapper": {
    width: "100%",
    height: "225px",
    overflow: "hidden",
    "& .blog-image": {
      width: "100%",
      height: "225px",
      transition: "all 0.4s",
    },
  },
  "& .text-section": {
    p: SPACE_M2,
    display: "flex",
    rowGap: SPACE_H2,
    flexDirection: "column",
    justifyContent: "space-between",
    "& .text-wrapper": {
      display: "flex",
      rowGap: SPACE_M2,
      flexDirection: "column",
      "& .title": {
        fontWeight: FONT_WEIGHT_BLOD,
        fontSize: FONT_BODY_MEDIUM2,
      },
      "& .description": {
        color: COLOR_GRAY,
        fontSize: FONT_LABEL_LARGE,
      },
    },
    "& .button-wrapper": {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      "& .button": {
        p: "0",
        width: "fit-content",
        color: COLOR_SECEONDRY,
        fontSize: FONT_LABEL_LARGE,
        textTransform: "capitalize",
        "&:hover": {
          outline: "none",
        },
      },
    },
  },
};

export const customTitle = (
  iconColor?: string,
  color?: string
): SxProps<Theme> => ({
  gap: SPACE_D1,
  display: "flex",
  fontWeight: FONT_WEIGHT_BLOD,
  width: "fit-content",
  position: "relative",
  alignItems: "center",
  fontSize: FONT_TITLE_SMALL,
  color: color || COLOR_TEXT,
  justifyContent: "space-between",
  borderBottom: "2px solid" + (iconColor || COLOR_SECEONDRY),
  "& .vector-image": {
    left: "-45px",
    width: "100px",
    height: "100px",
    bottom: "-32px",
    position: "absolute",
    zIndex: 22000,
  },
});

export const contentProviderSX = (
  reverse?: boolean,
  imageWidth?: string
): SxProps<Theme> => ({
  mx: "auto",
  width: "100%",
  display: "flex",
  my: SPACE_H2,
  maxWidth: MAX_WIDTH,
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: reverse ? "row-reverse" : "row",
  "& .right-section": {
    display: "flex",
    rowGap: SPACE_M2,
    position: "relative",
    flexDirection: "column",
    "& .content": {
      width: "100%",
    },
    "& .vector": {
      width: "100px",
      top: "0px",
      position: "absolute",
      right: "0px",
      zIndex: 22000,
    },
  },
  "& .left-section": {
    display: "flex",
    position: "relative",
    justifyContent: reverse ? "start" : "end",
    "& .image": {
      width: imageWidth || "620px",
    },
  },
});

export const headingPageSX = (image?: string): SxProps<Theme> => ({
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${image})`,
  "& .container": {
    mx: "auto",
    height: "100%",
    display: "flex",
    maxWidth: "1000px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "& .title": {
      color: COLOR_WHITE,
      fontWeight: FONT_WEIGHT_BLOD,
      fontSize: FONT_HEADING_XLARGE,
    },
    "& .subtitle": {
      textAlign: "center",
      color: COLOR_TEXT_WHITE,
      fontSize: FONT_BODY_MEDIUM2,
      fontWeight: FONT_WEIGHT_BLOD,
    },
  },
});

export const profileCardSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  gap: SPACE_XS1,
  alignItems: "center",
  "& .profile-image": {
    width: "80px",
    height: "80px",
    borderRadius: "10px",
    objectFit: "scale-down",
    background: "linear-gradient(154.68deg, #E7EDEF 24.32%, #E7EDEF 99.84%)",
  },
  "& .profile-name": {
    color: "#686868",
    fontSize: FONT_BODY_SMALL,
    fontWeight: FONT_WEIGHT_BLOD,
  },
};

export const dialogContentSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",
  mb: SPACE_D1,
  gap: SPACE_M4,
  "& .title": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: FONT_BODY_MEDIUM1,
    fontWeight: FONT_WEIGHT_BLOD,
    gap: SPACE_XS1,
  },
  "& .description": {
    textAlign: "center",
    fontSize: FONT_BODY_SMALL,
    fontWeight: FONT_WEIGHT_BLOD,
  },
};
