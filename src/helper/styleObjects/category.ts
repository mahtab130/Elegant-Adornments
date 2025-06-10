import { SxProps, Theme } from "@mui/material";

import {
  FONT_BODY_SMALL,
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
  FONT_BODY_LARGE,
} from "../constants/fonts";
import {
  SPACE_M3,
  SPACE_S2,
  SPACE_H3,
  SPACE_H2,
  SPACE_D1,
  SPACE_M4,
} from "../constants/spaces";
import { COLOR_TEXT } from "../constants/colors";
import { MAX_WIDTH } from "../constants/static";

export const filterItemsSX = (isOpen?: boolean): SxProps<Theme> => ({
  py: SPACE_M3,
  width: "100%",
  display: "flex",
  cursor: "pointer",
  flexDirection: "column",
  justifyContent: "center",
  borderBottom: "1px solid #D0D0D0",
  "&:hover": {
    "& .label-wrapper": {
      "& .label": {
        color: COLOR_TEXT,
      },
      "& .icon-arrow": {
        transition: "0.3s",
        filter: "brightness(0.8)",
      },
    },
  },
  "& .label-wrapper": {
    pb: isOpen ? SPACE_S2 : undefined,
    display: "flex",
    justifyContent: "space-between",
    borderBottom: isOpen ? "1px solid #D0D0D0" : "none",
    "& .label": {
      color: "#7C7C7C",
      fontSize: FONT_BODY_SMALL,
      fontWeight: FONT_WEIGHT_BLOD,
    },
    "& .icon-arrow": {
      width: "24px",
      height: "24px",
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#E7EDEF",
    },
  },
  "& .items-wrapper": {
    mt: SPACE_M3,
  },
});

export const categoryPageSX: SxProps<Theme> = {
  mx: "auto",
  mt: SPACE_H3,
  pt: SPACE_H2,
  width: "100%",
  height: "100%",
  maxWidth: MAX_WIDTH,
  "& .container": {
    mt: SPACE_D1,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& .filter-box": {
      width: "100%",
      minHeight: "fit-content",
      position: { xs: "unset", md: "sticky" },
      top: "140px",
      borderRadius: "14px",
      height: "fit-content",
      boxShadow: "0px 0px 16px 0px #9F9F9F29",

      "& .title": {
        p: SPACE_M3,
        borderBottom: "1px solid #D0D0D0",
        fontWeight: FONT_WEIGHT_BLOD,
        fontSize: FONT_BODY_MEDIUM2,
      },
      "& .filter-items-wrapper": {
        px: SPACE_M3,
        width: "100%",
        overflow: "auto",
        maxHeight: "570px",
        "::-webkit-scrollbar": {
          width: "2px",
          mt: "23px",
        },
        "::-webkit-scrollbar-track": {
          background: "#ABDDF0px",
        },
        "::-webkit-scrollbar-thumb": {
          width: "6px",
          backgroundColor: "#568A9E90px",
          borderRadius: "20px",
        },
      },
    },
    "& .products": {
      "& .title-products": {
        py: SPACE_M3,
        fontSize: FONT_BODY_LARGE,
        fontWeight: FONT_WEIGHT_BLOD,
        borderBottom: "1px solid #D0D0D0",
      },
      "& .products-wrapper": {
        my: SPACE_D1,
        gap: SPACE_M4,
        justifyContent: "space-between",
      },
    },
  },
};
