import { memo } from "react";

import { Grid } from "@mui/material";

import { blogs } from "../../data/blogs";
import { CustomTitle } from "../common/CustomTitle";
import { CustomSwiperBlog } from "../controller/CustomSwiper";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { blogSX } from "../../helper/styleObjects/homeSection";

export const BlogSection = memo(() => {
  return (
    <Grid sx={blogSX}>
      <AnimationSlideIn direction="up">
        <CustomTitle title="Blog" />
      </AnimationSlideIn>
      <AnimationSlideIn direction="left">
        <CustomSwiperBlog data={blogs} />
      </AnimationSlideIn>
    </Grid>
  );
});
