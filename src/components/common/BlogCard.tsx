import { memo } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { arrowLeft2Icon } from "../other/SvgComponent";
import { CustomButton } from "../controller/CustomButton";
import { blogCardSX } from "../../helper/styleObjects/common";
import { useNavigate } from "react-router-dom";

export const BlogCard = memo<IBlogCard>(
  ({ image, description, title, navigateString }) => {
    const navigate = useNavigate();
    return (
      <Grid sx={blogCardSX}>
        <Grid
          onClick={() => navigate(navigateString || "")}
          className="image-wrapper"
        >
          <Box component="img" className="blog-image" src={image} />
        </Grid>
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
              onClick={() => navigate(navigateString || "")}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
);
