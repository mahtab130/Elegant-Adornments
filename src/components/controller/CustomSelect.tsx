import { memo } from "react";
import {
  Select,
  SelectProps,
  MenuItem,
  SxProps,
  Grid,
  Theme,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import { CustomLabel } from "./CustomLabel";
import { ErrorMessage, IErrorMessage } from "./CustomTextfield";
import {
  COLOR_PRIMARY,
  COLOR_TEXT,
  COLOR_WHITE,
} from "../../helper/constants/colors";
import { FONT_WEIGHT_BLOD } from "../../helper/constants/fonts";

interface IOption {
  label: string;
  value: number | string;
}
export type ICustomSelect = SelectProps & {
  customLabel?: string;
  lng?: string;
  subTitleLabel?: string;
  className?: string;
  value?: string | number;
  required?: boolean;
  disabled?: boolean;
  items?: IOption[];
  errorMessage?: IErrorMessage;
};

export const CustomSelect = memo<ICustomSelect>(
  ({ errorMessage, className, customLabel, ...props }) => {
    const { required, items, disabled, label, name } = props;
    return (
      <Grid sx={customSelectSX(disabled)} className="wrapper-custom-select">
        {customLabel ? (
          <CustomLabel label={customLabel} required={required} />
        ) : undefined}
        <FormControl>
          {label && <InputLabel id={name + "select-label"}>{label}</InputLabel>}
          <Select
            {...{
              ...props,
              className: className + " custom-select",
              labelId: name + "select-label",
              required: undefined,
            }}
            MenuProps={{
              sx: listMuiSelectSX,
            }}
            displayEmpty
          >
            {items?.map(({ value, label }, key) => (
              <MenuItem
                key={key}
                sx={customSelectItemsSX}
                className="select-items"
                value={value}
              >
                <Typography variant="body1" className="select-item">
                  {label}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {errorMessage && (
          <ErrorMessage
            text={errorMessage?.text || ""}
            type={errorMessage?.type || "error"}
            disabled={disabled || false}
          />
        )}
      </Grid>
    );
  }
);

const customSelectSX = (disabled: boolean | undefined): SxProps<Theme> => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  pb: "14px",
  "& .custom-select": {
    width: "100%",
    borderRadius: "12px",
    color: COLOR_TEXT,
    padding: "0px !important",
    opacity: disabled ? 0.4 : 1,
  },
  "& .MuiOutlinedInput-input": {
    px: `${"8px"} !important`,
  },
  "& .MuiInputBase-root": {
    outline: "none",
    color: COLOR_TEXT,
    fontSize: "14px",
    borderRadius: "12px",
    fontWeight: "600",
    "& fieldset": {
      backgroundColor: COLOR_WHITE,
      borderColor: "#c4c4c4",
    },
    "&.Mui-focused": {
      backgroundColor: `${COLOR_PRIMARY}10 !important`,
    },
    "&:hover fieldset": {
      borderColor: disabled ? "none" : COLOR_PRIMARY,
    },
    "&::placeholder": {
      color: `${"#919EAB"} !important`,
    },
  },
  "& .MuiSvgIcon-root": {
    display: "flex",
    position: "relative",
    right: "12px",
    top: "0px",
    cursor: "pointer",
  },
  "& .select-item": {
    fontWeight: "700",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .MuiInputLabel-root": {
    left: "22px",
    transformOrigin: "top left",
    fontSize: "14px",
    fontWeight: "600",
    px: "8px",
  },
  "& legend": {
    textAlign: "end !important",
  },
});

const customSelectItemsSX: SxProps<Theme> = {
  display: "flex",
  alignItems: "stretch",
  flexDirection: "column",
  textAlign: "right",
  fontWeight: "700",
  fontSize: "14px",
  background: COLOR_WHITE,
  justifyContent: "flex-start",
  mb: "4px",
  gap: "100px",
  width: "97% !important",
  borderRadius: "8px",
  "& .select-item": {
    height: "35px",
    fontWeight: FONT_WEIGHT_BLOD,
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .sub-label": {
    fontWeight: FONT_WEIGHT_BLOD,
    fontSize: "14px",
    color: `${COLOR_TEXT}80`,
  },
  "&:hover": {
    background: `${"#919EAB"}20`,
  },

  "& .MuiInputBase-root": {
    outline: "none",
    borderRadius: "12px",
    border: `1px solid ${COLOR_TEXT}70`,
    "& .MuiTouchRipple-root": {
      backgroundColor: `${COLOR_PRIMARY}10 !important`,
    },
  },
};

const listMuiSelectSX: SxProps<Theme> = {
  "& .MuiMenu-paper": {
    background: COLOR_WHITE,
    my: `${"8px"} !important`,
    borderRadius: `14px`,
    boxShadow: "0px 0px 7px 3px rgba(230,230,230,0.5) !important",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      my: "16px",
      borderRadius: "14px",
      background: "#0000000A",
    },
    "&::-webkit-scrollbar-thumb": {
      background: COLOR_PRIMARY,
      borderRadius: "14px",
    },
  },
  "& .MuiList-root": {
    maxHeight: "190px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .MuiMenuItem-root": {
    justifyContent: "center !important",
  },
};
