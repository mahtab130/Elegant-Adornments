import { FC, useState } from "react";

import { map } from "lodash";
import { Grid, SxProps, Theme } from "@mui/material";

import { HeadingPage } from "../../common/HeadingPage";

import { blogs } from "../../../data/blogs";
import { BlogCard } from "../../common/BlogCard";
import { MAX_WIDTH } from "../../../helper/constants/static";
import { AnimationFadeIn } from "../../common/AnimateComponent";
import { CustomPagination } from "../../controller/CustomPagination";
import { SPACE_H3, SPACE_XM1 } from "../../../helper/constants/spaces";

import backgrounImage from "../../../assets/images/blogs/blog-back.png";

const Blogs: FC = () => {
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const paginatedItems = blogs.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Grid sx={blogSX}>
      <HeadingPage
        title="Blogs"
        image={backgrounImage}
        description="Elegant Adornments store is a gallery that offers you the most beautiful collection of handmade jewelry and jewelry by combining traditional art and modern designs."
      />

      <Grid container className="container-body">
        {map(paginatedItems, ({ description, id, image, title }) => (
          <Grid item xs={12} md={4}>
            <AnimationFadeIn className="animaiton">
              <BlogCard
                id={id}
                image={image}
                title={title}
                description={description}
                navigateString={`blog/${id}`}
              />
            </AnimationFadeIn>
          </Grid>
        ))}
        <Grid className="pagination-wrapper">
          <CustomPagination
            hidePrevButton
            siblingCount={1}
            boundaryCount={0}
            count={Math.ceil(blogs.length / itemsPerPage)}
            page={page}
            onChange={(_, value) => setPage(value)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blogs;

const blogSX: SxProps<Theme> = {
  width: "100%",
  "& .container-body": {
    "& .animaiton": {
      width: "fit-content",
    },
    mx: "auto",
    my: SPACE_H3,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    rowGap: SPACE_XM1,
    justifyContent: "space-between",
    maxWidth: `calc(${MAX_WIDTH} + -80px)`,
    "& .pagination-wrapper": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
};
