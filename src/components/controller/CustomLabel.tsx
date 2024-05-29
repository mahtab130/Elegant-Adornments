import { memo } from "react";

import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";

import { SPACE_S2 } from "../../helper/constants/spaces";
import { labelSize } from "../../helper/constants/others";
import { FONT_WEIGHT_BLOD } from "../../helper/constants/fonts";
import { COLOR_TEXT_GRAY } from "../../helper/constants/colors";

export const CustomLabel = memo<ICustomLabel>(
  ({ label, required, size, color }) => {
    return (
      <Grid className="label-wrapper" sx={customLabelSX(size, color)}>
        <Typography className="label">
          {label}
          {required ? (
            <Box component="span" className="required">
              *
            </Box>
          ) : null}
        </Typography>
      </Grid>
    );
  }
);

const customLabelSX = (
  size: ICustomLabel["size"],
  color: ICustomLabel["color"]
): SxProps<Theme> => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  "& .label": {
    mb: SPACE_S2,
    color: color || COLOR_TEXT_GRAY,
    fontSize: labelSize[size || "small"],
    fontWeight: FONT_WEIGHT_BLOD,
    "& span": {},
  },
});
