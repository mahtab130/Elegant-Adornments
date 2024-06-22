import { memo, useState } from "react";

import {
  Grid,
  Radio,
  Theme,
  SxProps,
  RadioProps,
  Typography,
} from "@mui/material";

import {
  FONT_LABEL_LARGE,
  FONT_WEIGHT_BLOD,
} from "../../helper/constants/fonts";
import { SPACE_S1, SPACE_S2 } from "../../helper/constants/spaces";

interface ICustomRadio extends RadioProps {
  label: string;
}

export const CustomRadio = memo<ICustomRadio>(({ label, ...props }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Grid sx={radioSX} onClick={() => setChecked(!checked)}>
      <Radio checked={checked} {...props} />
      <Typography className="label">{label}</Typography>
    </Grid>
  );
});

const radioSX: SxProps<Theme> = {
  width: "100%",
  gap: SPACE_S1,
  display: "flex",
  alignItems: "center",
  "& .label": {
    color: "#939393",
    fontSize: FONT_LABEL_LARGE,
    fontWeight: FONT_WEIGHT_BLOD,
  },
  "& .MuiRadio-root": {
    p: SPACE_S2,
  },
};
