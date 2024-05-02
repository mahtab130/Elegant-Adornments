import { memo } from "react";

import { Grid, SxProps, Theme, Typography } from "@mui/material";

import {
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
  FONT_HEADING_XLARGE,
} from "../../helper/constants/fonts";
import { AnimationSlideIn } from "./AnimateComponent";
import { COLOR_WHITE, COLOR_TEXT_WHITE } from "../../helper/constants/colors";

interface IHeadingPage {
  title: string;
  image: string;
  description: string;
}

export const HeadingPage = memo<IHeadingPage>(
  ({ description, image, title }) => {
    return (
      <Grid sx={headingPageSX(image)}>
        <AnimationSlideIn direction="left" className="container">
          <Grid className="container">
            <Typography className="title">{title}</Typography>
            <Typography className="subtitle">{description}</Typography>
          </Grid>
        </AnimationSlideIn>
      </Grid>
    );
  }
);

const headingPageSX = (image?: string): SxProps<Theme> => ({
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${image})`,
  "& .container": {
    mx: "auto",
    height: "100%",
    display: "flex",
    maxWidth: "1000px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "& .title": {
      color: COLOR_WHITE,
      fontWeight: FONT_WEIGHT_BLOD,
      fontSize: FONT_HEADING_XLARGE,
    },
    "& .subtitle": {
      textAlign: "center",
      color: COLOR_TEXT_WHITE,
      fontSize: FONT_BODY_MEDIUM2,
      fontWeight: FONT_WEIGHT_BLOD,
    },
  },
});
