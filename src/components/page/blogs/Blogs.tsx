import { FC, useState } from "react";

import { map } from "lodash";
import { Grid } from "@mui/material";

import { HeadingPage } from "../../common/HeadingPage";

import { blogs } from "../../../data/blogs";
import { BlogCard } from "../../common/BlogCard";
import { blogSX } from "../../../helper/styleObjects/blog";
import { AnimationSlideIn } from "../../common/AnimateComponent";
import { CustomPagination } from "../../controller/CustomPagination";

import backgrounImage from "../../../assets/images/blogs/blog-back.webp";

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
        {map(paginatedItems, ({ description, id, image, title }, index) => (
          <Grid item xs={12} md={4} key={index + id}>
            <AnimationSlideIn direction="left" className="animaiton">
              <BlogCard
                id={id}
                image={image}
                title={title}
                description={description}
                navigateString={`${id}`}
              />
            </AnimationSlideIn>
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
