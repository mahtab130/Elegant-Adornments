import { memo, useCallback, useState } from "react";

import {
  Box,
  Grid,
  Theme,
  SxProps,
  TextField,
  Typography,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material";

import {
  COLOR_PRIMARY,
  COLOR_TEXT_GRAY,
  COLOR_PLACEHOLDER,
} from "../../helper/constants/colors";
import {
  FONT_WEIGHT_BLOD,
  FONT_LABEL_SMALL,
  FONT_LABEL_MEDIUM,
} from "../../helper/constants/fonts";
import { eyeIcon } from "../other/SvgComponent";
import { SPACE_S2, SPACE_S4 } from "../../helper/constants/spaces";

export type TCustomTextfield =
  | {
      variant?: TextFieldVariants;
    } & Omit<TextFieldProps, "variant"> & {
        iconEmail?: boolean;
        customLabel?: string;
        endIcon?: JSX.Element;
        startIcon?: JSX.Element;
        idPasswordField?: boolean;
      };

export const CustomTextfield = memo<TCustomTextfield>(
  ({
    endIcon,
    startIcon,
    iconEmail,
    customLabel,
    idPasswordField,
    ...props
  }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handlePasswordVisibility = useCallback(() => {
      setShowPassword((prevState) => !prevState);
    }, []);

    const hasIcon = endIcon ? true : false;
    return (
      <Grid sx={textfieldSX(hasIcon)}>
        {customLabel && (
          <Typography className="label">{customLabel}</Typography>
        )}
        <TextField
          {...props}
          type={!idPasswordField || showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: idPasswordField ? (
              <Box className="pass-icon" onClick={handlePasswordVisibility}>
                {eyeIcon()}
              </Box>
            ) : (
              endIcon &&
              (iconEmail ? (
                <Box className={"end-icon"}>{endIcon}</Box>
              ) : (
                endIcon
              ))
            ),
            startAdornment: <>{startIcon}</>,
          }}
        />
      </Grid>
    );
  }
);

const textfieldSX = (hasIcon?: boolean): SxProps<Theme> => ({
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
