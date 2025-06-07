import { memo } from "react";

import { Grid } from "@mui/material";

import { CustomTitle } from "../common/CustomTitle";
import { CustomSwiperBlog } from "../controller/CustomSwiper";
import { AnimationSlideIn } from "../common/AnimateComponent";
import { blogSX } from "../../helper/styleObjects/homeSection";
import { useBlogSearch } from "../../helper/services/hooks/all";

export const BlogSection = memo(() => {
  const { data: blogData } = useBlogSearch();
  return (
    <Grid sx={blogSX}>
      <AnimationSlideIn direction="up">
        <CustomTitle title="Blog" />
      </AnimationSlideIn>
      <AnimationSlideIn direction="left">
        <CustomSwiperBlog data={blogData} />
      </AnimationSlideIn>
    </Grid>
  );
});
