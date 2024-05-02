import { memo, useCallback, useState } from "react";

import {
  Box,
  Grid,
  TextField,
  TextFieldProps,
  TextFieldVariants,
  Typography,
} from "@mui/material";

import { textfieldSX } from "../../helper/styleObjects/controllers";
import { eyeIcon } from "../other/SvgComponent";

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
    customLabel,
    iconEmail,
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
