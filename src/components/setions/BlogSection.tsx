import { memo } from "react";

import { Grid } from "@mui/material";

import { blogs } from "../../data/blogs";
import { CustomTitle } from "../common/CustomTitle";
import { CustomSwiperBlog } from "../common/CustomSwiper";
import { blogSX } from "../../helper/styleObjects/homeSection";

export const BlogSection = memo(() => {
  return (
    <Grid sx={blogSX}>
      <CustomTitle title="Blog" />
      <CustomSwiperBlog data={blogs} />
    </Grid>
  );
});
