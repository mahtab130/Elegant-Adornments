import {
  ChangeEvent,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

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
import { clearIcon, eyeIcon } from "../other/SvgComponent";
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
        hasDelete?: boolean;
      };

export const CustomTextfield = memo<TCustomTextfield>(
  ({
    endIcon,
    startIcon,
    onChange,
    hasDelete,
    iconEmail,
    customLabel,
    idPasswordField,
    ...props
  }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [, keyUp] = useState<HTMLDivElement>();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handlePasswordVisibility = useCallback(() => {
      setShowPassword((prevState) => !prevState);
    }, []);

    const handleDeleteClick = useCallback(() => {
      inputRef.current && (inputRef.current.value = "");
      onChange &&
        onChange({ target: inputRef.current } as ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement
        >);
      !onChange && keyUp(inputRef.current as HTMLDivElement);
    }, [onChange]);

    const hasIcon = endIcon ? true : false;

    const endIconComponent = useMemo(
      () =>
        idPasswordField ? (
          <Box className="pass-icon" onClick={handlePasswordVisibility}>
            {eyeIcon()}
          </Box>
        ) : hasDelete ? (
          <Box
            component="div"
            className="delete-icon"
            onClick={handleDeleteClick}
          >
            {clearIcon()}
          </Box>
        ) : (
          endIcon &&
          (iconEmail ? <Box className={"end-icon"}>{endIcon}</Box> : endIcon)
        ),
      [
        endIcon,
        hasDelete,
        iconEmail,
        idPasswordField,
        handleDeleteClick,
        handlePasswordVisibility,
      ]
    );

    return (
      <Grid className="textfield-wrapper" sx={textfieldSX(hasIcon)}>
        {customLabel && (
          <Typography className="label">{customLabel}</Typography>
        )}
        <TextField
          inputRef={inputRef}
          onChange={onChange}
          onKeyUp={
            hasDelete && !onChange
              ? (e) => keyUp(e.target as HTMLDivElement)
              : undefined
          }
          {...props}
          type={!idPasswordField || showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: endIconComponent,
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
        color: COLOR_PLACEHOLDER,
        fontSize: FONT_LABEL_SMALL,
        fontWeight: FONT_WEIGHT_BLOD,
        "&::placeholder": {
          opacity: "1",
          color: COLOR_PLACEHOLDER,
        },
      },
      "&.MuiInput-underline ": {
        "&:before": {
          borderColor: COLOR_PRIMARY,
          content: '""',
          bottom: "6px",
        },
        "&:after": {
          display: "none",
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
    "& .delete-icon": {
      height: "20px",
      cursor: "pointer",
      "&:hover": {
        transition: "all 0.4s",
        transform: "scale(1.2)",
      },
    },
  },
});
