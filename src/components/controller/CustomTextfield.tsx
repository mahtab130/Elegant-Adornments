import {
  memo,
  useRef,
  useMemo,
  useState,
  useCallback,
  ChangeEvent,
} from "react";

import {
  Box,
  Grid,
  Theme,
  SxProps,
  TextField,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material";

import {
  COLOR_TEXT,
  COLOR_PRIMARY,
  COLOR_TEXT_WHITE,
  COLOR_PLACEHOLDER,
} from "../../helper/constants/colors";
import {
  FONT_LABEL_SMALL,
  FONT_WEIGHT_BLOD,
} from "../../helper/constants/fonts";
import { CustomLabel } from "./CustomLabel";
import { SPACE_S4 } from "../../helper/constants/spaces";
import { clearIcon, eyeIcon } from "../other/SvgComponent";

export type TCustomTextfield =
  | {
      variant?: TextFieldVariants;
    } & Omit<TextFieldProps, "variant"> & {
        required?: boolean;
        customLabel?: string;
        type?: "password" | "textArea";
        setting?: {
          noBorder?: boolean;
          labelColor?: string;
          hasDelete?: boolean;
          customColor?: string;
          isIconButton?: boolean;
          labelSize?: ICustomLabel["size"];
        };
        endIcon?: JSX.Element;
        startIcon?: JSX.Element;
      };

export const CustomTextfield = memo<TCustomTextfield>(
  ({
    type,
    setting,
    endIcon,
    required,
    onChange,
    startIcon,
    customLabel,
    ...props
  }) => {
    const {
      noBorder,
      labelSize,
      hasDelete,
      labelColor,
      customColor,
      isIconButton,
    } = setting ?? {};
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
        type == "password" ? (
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
          (isIconButton ? <Box className={"end-icon"}>{endIcon}</Box> : endIcon)
        ),
      [
        type,
        endIcon,
        hasDelete,
        isIconButton,
        handleDeleteClick,
        handlePasswordVisibility,
      ]
    );

    return (
      <Grid
        className="textfield-wrapper"
        sx={textfieldSX(hasIcon, customColor, noBorder)}
      >
        {customLabel && (
          <CustomLabel
            size={labelSize}
            color={labelColor}
            label={customLabel || ""}
            required={required}
          />
        )}
        <TextField
          placeholder={customLabel}
          inputRef={inputRef}
          onChange={onChange}
          onKeyUp={
            hasDelete && !onChange
              ? (e) => keyUp(e.target as HTMLDivElement)
              : undefined
          }
          {...props}
          type={type !== "password" || showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: <>{endIconComponent}</>,
            startAdornment: <>{startIcon}</>,
          }}
        />
      </Grid>
    );
  }
);

const textfieldSX = (
  hasIcon?: boolean,
  customColor?: string,
  noBorder?: boolean
): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  "& .MuiTextField-root": {
    width: "100%",
    "& .MuiInputBase-root": {
      height: "50px",
      overflow: "hidden",
      pr: hasIcon ? "0px" : undefined,
      borderRadius: "12px",
      "& fieldset": {
        border: noBorder
          ? "none"
          : "1px solid" + COLOR_TEXT_WHITE || customColor,
      },
      "& .MuiInputBase-input": {
        fontSize: FONT_LABEL_SMALL,
        fontWeight: FONT_WEIGHT_BLOD,
        color: customColor || COLOR_TEXT,
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
