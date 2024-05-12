import { memo } from "react";

import { Typography, Box } from "@mui/material";

import { arrowCrookedIcon } from "../other/SvgComponent";
import { customTitle } from "../../helper/styleObjects/common";

import backImage from "../../assets/images/vectors/diamond-vector-straight.webp";

export const CustomTitle = memo<ICustomTitle>(({ title, setting }) => {
  const { color, iconColor } = setting ?? {};
  return (
    <Typography sx={customTitle(iconColor, color)}>
      {title}
      {arrowCrookedIcon(iconColor)}
      <Box component="img" className="vector-image" src={backImage} />
    </Typography>
  );
});
