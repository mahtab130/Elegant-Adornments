import { FC, useState } from "react";

import { map } from "lodash";
import { Grid } from "@mui/material";

import { HeadingPage } from "../../common/HeadingPage";

import { BlogCard } from "../../common/BlogCard";
import { blogSX } from "../../../helper/styleObjects/blog";
import { AnimationSlideIn } from "../../common/AnimateComponent";
import { CustomPagination } from "../../controller/CustomPagination";

import backgrounImage from "../../../assets/images/blogs/blog-back.webp";
import { useBlogSearch } from "../../../helper/services/hooks/all";
import { handleImageUrl } from "../../../helper/utils/handlers";

const Blogs: FC = () => {
  const [page, setPage] = useState(1);

  const { data: blogData } = useBlogSearch();

  const itemsPerPage = 6;
  const paginatedItems = (blogData || [])?.slice(
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
        {map(
          paginatedItems,
          ({ shortDescription, id, imageUrl, title }, index) => (
            <Grid item xs={12} md={3.8} key={index + id}>
              <AnimationSlideIn direction="left" className="animaiton">
                <BlogCard
                  id={id}
                  image={handleImageUrl(imageUrl)}
                  title={title}
                  description={shortDescription}
                  navigateString={`${id}`}
                />
              </AnimationSlideIn>
            </Grid>
          )
        )}
        <Grid className="pagination-wrapper">
          <CustomPagination
            hidePrevButton
            siblingCount={1}
            boundaryCount={0}
            count={Math.ceil(blogData?.length / itemsPerPage)}
            page={page}
            onChange={(_, value) => setPage(value)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blogs;
