import { SPACE_S4 } from "./../constants/spaces";
import { SxProps, Theme } from "@mui/material";

import {
  SPACE_D1,
  SPACE_M2,
  SPACE_M3,
  SPACE_S2,
  SPACE_XS1,
} from "../constants/spaces";
import {
  FONT_BODY_MEDIUM2,
  FONT_LABEL_MEDIUM,
  FONT_LABEL_SMALL,
  FONT_WEIGHT_BLOD,
} from "../constants/fonts";
import {
  COLOR_PLACEHOLDER,
  COLOR_PRIMARY,
  COLOR_SECEONDRY,
  COLOR_TEXT,
  COLOR_TEXT_GRAY,
  COLOR_TEXT_WHITE,
  COLOR_WHITE,
} from "../constants/colors";

export const customAccordionContentSX = (
  expanded?: boolean
): SxProps<Theme> => ({
  "&.MuiAccordion-root": {
    width: "100%",
    boxShadow: "none",
    "&:before": { display: "none" },
    "&.Mui-expanded": {
      my: "0px",
    },
    "& .MuiAccordionSummary-root": {
      p: "0px",
      py: SPACE_M3,
      minHeight: "auto",
      borderBottom: expanded ? "none" : "1px solid " + COLOR_SECEONDRY,
      "& .MuiAccordionSummary-content": {
        my: "0px",
        fontWeight: FONT_WEIGHT_BLOD,
        color: COLOR_TEXT,
        fontSize: FONT_BODY_MEDIUM2,
        "& svg": {
          width: "15px",
          height: "15px",
        },
      },
    },
    "& .MuiAccordion-region": {
      "& .MuiAccordionDetails-root": {
        p: "0px",
        pb: SPACE_M3,
        borderBottom: "1px solid " + COLOR_SECEONDRY,
      },
    },
  },
});
export const customAccordionSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& .MuiAccordion-root:last-child": {
    "& .MuiAccordionSummary-root": {
      borderBottom: "none",
    },
    "& .MuiAccordionDetails-root": {
      borderBottom: "none",
    },
  },
};

export const buttonSX = (customColor?: string): SxProps<Theme> => ({
  px: SPACE_D1,
  py: SPACE_XS1,
  fontWeight: FONT_WEIGHT_BLOD,
  lineHeight: SPACE_M2,
  boxShadow: "none",
  borderRadius: "14px",
  fontSize: FONT_BODY_MEDIUM2,
  textTransform: "capitalize",
  outline: "1px solid transparent",
  "&.MuiButton-contained": {
    transition: "0.3s",
    color: customColor === COLOR_SECEONDRY ? COLOR_WHITE : COLOR_TEXT,
    background: customColor,
    border: `1px solid transparent`,
    "&:hover": {
      boxShadow: "none",
      color: customColor ?? COLOR_PRIMARY,
      backgroundColor: "transparent",
      outline: "1px solid" + customColor ?? COLOR_PRIMARY,
    },
  },
  "&.MuiButton-outlined": {
    color: customColor,
    backgroundColor: COLOR_WHITE,
    border: `1px solid ${
      customColor == COLOR_TEXT_GRAY ? COLOR_TEXT_WHITE : customColor
    }`,
    "&:hover": {
      backgroundColor: `${customColor}10`,
    },
  },
});

export const textfieldSX = (hasIcon?: boolean): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  "& .label": {
    mb: SPACE_S2,
    color: COLOR_TEXT_GRAY,
    fontSize: FONT_LABEL_MEDIUM,
    fontWeight: FONT_WEIGHT_BLOD,
  },
  "& .MuiTextField-root": {
    width: "100%",
    "& .MuiInputBase-root": {
      height: "50px",
      overflow: "hidden",
      pr: hasIcon ? "0px" : undefined,
      borderRadius: "12px",
      "& fieldset": {
        border: "none",
      },
      "& .MuiInputBase-input": {
        "&::placeholder": {
          opacity: "1",
          color: COLOR_PLACEHOLDER,
          fontSize: FONT_LABEL_SMALL,
          fontWeight: FONT_WEIGHT_BLOD,
        },
      },
    },
    "& .end-icon": {
      width: "60px",
      height: "50px",
      display: "flex",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLOR_PRIMARY,
      "&:hover": {
        "& svg": {
          transition: "all 0.4s",
          transform: "scale(1.2)",
        },
      },
    },
    "& .pass-icon": {
      height: "18px",
      p: SPACE_S4,
      cursor: "pointer",
      "&:hover": {
        transition: "all 0.4s",
        transform: "scale(1.2)",
      },
    },
  },
});
