import { memo } from "react";

import {
  Box,
  TextField,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material";

import { textfieldSX } from "../../helper/styleObjects/controllers";

type TCustomTextfield =
  | {
      variant?: TextFieldVariants;
    } & Omit<TextFieldProps, "variant"> & {
        endIcon?: JSX.Element;
        startIcon?: JSX.Element;
      };

export const CustomTextfield = memo<TCustomTextfield>(
  ({ endIcon, startIcon, ...props }) => {
    const hasIcon = endIcon ? true : false;
    return (
      <TextField
        {...props}
        sx={textfieldSX(hasIcon)}
        InputProps={{
          endAdornment: <Box className="end-icon">{endIcon}</Box>,
          startAdornment: <>{startIcon}</>,
        }}
      />
    );
  }
);
