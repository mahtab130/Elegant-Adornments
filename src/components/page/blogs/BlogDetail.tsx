import { FC } from "react";

import { find } from "lodash";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import { AnimationSlideIn } from "../../common/AnimateComponent";
import { blogDetailSX } from "../../../helper/styleObjects/blog";
import { CustomBreadcrumbs } from "../../controller/CustomBreadcrumbs";

import { useBlogSearch } from "../../../helper/services/hooks/all";

export const BlogDetail: FC = () => {
  const { id: currentId } = useParams();

  const { data: blogData } = useBlogSearch();

  const { imageUrl, title, details } =
    find(blogData, ({ id }) => id == currentId) ?? {};

  return (
    <AnimationSlideIn direction={"left"}>
      <Grid sx={blogDetailSX(imageUrl)}>
        <CustomBreadcrumbs
          breadcrumbs={[
            { name: "Home", link: "/" },
            { name: "Blogs", link: "/blogs" },
            { name: title || "", link: "/" },
          ]}
        />
        <Grid className="container">{details}</Grid>
      </Grid>
    </AnimationSlideIn>
  );
};
