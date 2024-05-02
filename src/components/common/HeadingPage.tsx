import { memo } from "react";

import { Grid, Typography } from "@mui/material";

import { AnimationSlideIn } from "./AnimateComponent";
import { headingPageSX } from "../../helper/styleObjects/common";

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
