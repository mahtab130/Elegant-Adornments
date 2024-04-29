import { SxProps, Theme } from "@mui/material";

import { SPACE_D1, SPACE_M2, SPACE_M3, SPACE_XS1 } from "../constants/spaces";
import { FONT_BODY_MEDIUM2, FONT_WEIGHT_BLOD } from "../constants/fonts";
import {
  COLOR_PRIMARY,
  COLOR_SECEONDRY,
  COLOR_TEXT,
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

export const buttonSX: SxProps<Theme> = {
  px: SPACE_D1,
  py: SPACE_XS1,
  fontWeight: FONT_WEIGHT_BLOD,
  color: COLOR_TEXT,
  boxShadow: "none",
  lineHeight: SPACE_M2,
  borderRadius: "14px",
  fontSize: FONT_BODY_MEDIUM2,
  textTransform: "capitalize",
  outline: "1px solid transparent",
  "&:hover": {
    boxShadow: "none",
    color: COLOR_PRIMARY,
    backgroundColor: "transparent",
    outline: "1px solid" + COLOR_PRIMARY,
  },
};

export const textfieldSX = (hasIcon?: boolean): SxProps<Theme> => ({
  "&.MuiTextField-root": {
    width: "100%",
    height: "50px",
    "& .MuiInputBase-root": {
      overflow: "hidden",
      pr: hasIcon ? "0px" : undefined,
      borderRadius: "12px",
      "& fieldset": {
        border: "none",
      },
      "& .MuiInputBase-input    ": {
        "&::placeholder": {
          opacity: "0.5",
          color: COLOR_TEXT,
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
  },
});
