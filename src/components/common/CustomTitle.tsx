import { memo } from "react";

import { Typography, Box, SxProps, Theme } from "@mui/material";

import { arrowCrookedIcon } from "../other/SvgComponent";

import backImage from "../../assets/images/back-image-2.webp";
import { COLOR_SECEONDRY } from "../../helper/constants/colors";
import { FONT_BODY_LARGE } from "../../helper/constants/fonts";

export const CustomTitle = memo<{ title?: string }>(({ title }) => {
  return (
    <Typography sx={customTitle}>
      {title}
      {arrowCrookedIcon()}
      <Box component="img" className="vector-image" src={backImage} />
    </Typography>
  );
});

const customTitle: SxProps<Theme> = {
  width: "360px",
  display: "flex",
  fontWeight: "700",
  position: "relative",
  alignItems: "center",
  fontSize: FONT_BODY_LARGE,
  justifyContent: "space-between",
  borderBottom: "2px solid" + COLOR_SECEONDRY,
  "& .vector-image": {
    left: "-45px",
    width: "100px",
    height: "100px",
    bottom: "-32px",
    position: "absolute",
  },
};
