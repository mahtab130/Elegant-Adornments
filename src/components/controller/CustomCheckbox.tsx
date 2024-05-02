import { memo } from "react";

import {
  Grid,
  Theme,
  SxProps,
  Checkbox,
  Typography,
  CheckboxProps,
} from "@mui/material";

import {
  FONT_WEIGHT_BLOD,
  FONT_LABEL_MEDIUM,
} from "../../helper/constants/fonts";
import { COLOR_MEDIUM_GRAY } from "../../helper/constants/colors";
import { SPACE_S2, SPACE_S4 } from "../../helper/constants/spaces";
import { checkboxEmptyIcon, checkboxFillIcon } from "../other/SvgComponent";

export interface ICustomCheckbox extends CheckboxProps {
  label?: string;
  customColor?: string;
}

export const CustomCheckbox = memo<ICustomCheckbox>(
  ({ label, customColor, ...props }) => {
    return (
      <Grid sx={checkboxSX} className="checkbox-wrapper">
        <Checkbox
          {...props}
          icon={checkboxEmptyIcon(customColor)}
          checkedIcon={checkboxFillIcon(customColor)}
        />
        <Typography className="label-checkbox">{label}</Typography>
      </Grid>
    );
  }
);

const checkboxSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  "& .label-checkbox": {
    ml: SPACE_S2,
    color: COLOR_MEDIUM_GRAY,
    fontSize: FONT_LABEL_MEDIUM,
    fontWeight: FONT_WEIGHT_BLOD,
  },
  "& .MuiCheckbox-root": {
    p: SPACE_S4,
  },
};
