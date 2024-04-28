import { memo } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { arrowLeft2Icon } from "../other/SvgComponent";
import { CustomButton } from "../controller/CustomButton";
import { blogCardSX } from "../../helper/styleObjects/common";

export const BlogCard = memo<IBlog>(({ image, description, title }) => {
  return (
    <Grid sx={blogCardSX}>
      <Box component="img" className="blog-image" src={image} />
      <Grid className="text-section">
        <Grid className="text-wrapper">
          <Typography className="title">{title}</Typography>
          <Typography className="description">{description}</Typography>
        </Grid>
        <Grid className="button-wrapper">
          <CustomButton
            variant="text"
            text={"Read More"}
            className="button"
            endIcon={arrowLeft2Icon()}
          />
        </Grid>
      </Grid>
    </Grid>
  );
});
