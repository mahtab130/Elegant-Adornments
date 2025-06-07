import {
  memo,
  useRef,
  useMemo,
  useState,
  useCallback,
  ChangeEvent,
  FC,
} from "react";

import {
  Box,
  Grid,
  Theme,
  SxProps,
  TextField,
  TextFieldProps,
  TextFieldVariants,
  Typography,
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
import {
  clearIcon,
  errorIcon,
  eyeIcon,
  warningIcon,
} from "../other/SvgComponent";

export interface IErrorMessage {
  text: string;
  type: "error" | "warning";
  disabled?: boolean;
}

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
        errorMessage?: IErrorMessage;
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
    errorMessage,
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
        {errorMessage && (
          <ErrorMessage
            text={errorMessage?.text || ""}
            type={errorMessage?.type || "error"}
            disabled={false}
          />
        )}
      </Grid>
    );
  }
);

export const ErrorMessage: FC<IErrorMessage> = ({ text, type, disabled }) => {
  return (
    <Box
      component="div"
      sx={ERROR_MESSAGE_STYLE(disabled)}
      className="error-message"
    >
      {text && type === "warning"
        ? warningIcon()
        : text && type === "error"
        ? errorIcon()
        : ""}
      <Typography variant="body1" className="text-icon">
        {text}
      </Typography>
    </Box>
  );
};

const ERROR_MESSAGE_STYLE = (disabled?: boolean): SxProps<Theme> => ({
  width: "100%",
  gap: "4px",
  display: "flex",
  marginTop: "4px",
  alignItems: "center",
  opacity: disabled ? 0.3 : 1,
  "& .text-icon": {
    color: "#919EAB",
    fontSize: "12px",
    fontWeight: "600",
  },
  "& .icon": {
    width: "20px",
    height: "20px",
  },
});

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
