import { FC, memo } from "react";

import { find, map } from "lodash";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import { blogs } from "../../../data/blogs";
import { CustomImage } from "../../controller/CustomImage";
import { AnimationSlideIn } from "../../common/AnimateComponent";
import { CustomBreadcrumbs } from "../../controller/CustomBreadcrumbs";
import { bookIcon, clockIcon, dateIcon } from "../../other/SvgComponent";
import { blogDetailSX, contentBlogSX } from "../../../helper/styleObjects/blog";

import image1 from "../../../assets/images/blogs/blog-detail-1.webp";
import image2 from "../../../assets/images/blogs/blog-detail-2.webp";
import image3 from "../../../assets/images/blogs/blog-detail-3.webp";

export const BlogDetail: FC = () => {
  const { id: currentId } = useParams();

  const { image, title, date, studyTime, writer } =
    find(blogs, ({ id }) => id == Number(currentId)) ?? {};

  const otherInfo = [
    { name: writer, title: "Writer", icon: bookIcon() },
    { name: date, title: "", icon: dateIcon() },
    { name: studyTime, title: "Study time", icon: clockIcon() },
  ];

  return (
    <AnimationSlideIn direction={"left"}>
      <Grid sx={blogDetailSX(image)}>
        <CustomBreadcrumbs
          breadcrumbs={[
            { name: "Home", link: "/" },
            { name: "Blogs", link: "/blogs" },
            { name: title || "", link: "/" },
          ]}
        />
        <Grid className="container">
          <Grid className="image-background">
            <Typography className="title">
              Tips for distinguishing real rhinestones from fake ones
            </Typography>
          </Grid>
          <Grid className="other-info-wrapper">
            {map(otherInfo, ({ name, icon, title }, index) => (
              <Grid className="item" key={index}>
                {icon}
                <Typography className="name">
                  {title} : {name}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <ContentBlog />
        </Grid>
      </Grid>
    </AnimationSlideIn>
  );
};

const ContentBlog = memo(() => {
  return (
    <Grid sx={contentBlogSX}>
      <Typography className="description">
        Determining the authenticity of jewelry usually requires precision and
        experience. For this purpose, different points should be considered. The
        first point is to check the label and brand of jewelry. Original jewelry
        usually has authentic brands and complete manufacturer information, such
        as brand name, metal grade, weight, etc. In contrast, counterfeit
        jewelry often lacks this information and has invalid brands.The second
        thing is to check the weight and appearance of the jewelry. Original
        ornaments are usually heavier and of better quality. Also, their
        appearance details such as design, how to connect parts and overall
        beauty can be different from fake samples. The third solution is to
        conduct a magnetic test. Original gold and silver jewelry are not
        magnetic. In contrast, some metals used in counterfeit jewelry may have
        magnetic properties. The fourth is the acid test. Placing a drop of acid
        on a piece of jewelry can help determine authenticity. Original jewelry
        usually does not react much to acid. In addition to these cases,
        checking labeling and manufacturing quality can also be effective in
        detecting authenticity. In case of doubt, it is always better to buy
        from reliable and experienced sellers or consult with relevant experts.
      </Typography>
      <Typography className="title">
        Well, here is a complete list of ways to distinguish genuine from fake
        jewelry:
      </Typography>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">
          1.Checking product locks and straps:
        </Typography>
        <Typography className="text">
          <Box component="span"></Box>
          Original jewelry usually has quality clasps and clasps and neat
          construction.
        </Typography>
        <Typography className="text">
          <Box component="span"></Box>
          In fake jewelry, the clasps are usually weaker and more messy.
        </Typography>
      </Grid>
      <Grid className="image1-wrapper">
        <CustomImage className="image" src={image1} />
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">2.Product weight:</Typography>
        <Typography className="text">
          Genuine jewelry usually weighs more than counterfeits. This is due to
          the use of higher quality materials in original jewelry.
        </Typography>
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">
          3.Examining brand signs and logos:
        </Typography>
        <Typography className="text">
          In original jewelry, brand marks and logos are clear and precise. In
          fake samples, these signs are usually of lower quality and fade
        </Typography>
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">4.Magnetic test:</Typography>
        <Typography className="text">
          Examining the degree of magnetism is one of the most important methods
          for distinguishing genuine jewelry from fake jewelry. Let me explain
          this method further:
        </Typography>
        <Typography className="text">
          1. Hold the magnet close to the piece of jewel
        </Typography>
        <Typography className="text">
          2. If the piece is attracted to a magnet and drawn to it, the metal
          used in it is probably magnetic.
        </Typography>
        <Typography className="text">
          3. Original jewelry made of high quality metals is usually non-magneti
        </Typography>
        <Typography className="text">
          4. In contrast, counterfeit jewelry made of cheaper metals is usually
          magnetic and will be attracted to a magnet. This test is very simple
          and quick and can help you identify the original jewelry. Just be
          aware that some genuine jewelry may also contain some magnetic metal,
          but the amount of absorption is usually much lower than counterfeits.
        </Typography>
      </Grid>
      <Grid container xs={12} className="image2-wrapper">
        <Grid item xs={12} md={5.9}>
          <CustomImage className="image" src={image2} />
        </Grid>
        <Grid item xs={12} md={5.9}>
          <CustomImage className="image" src={image3} />
        </Grid>
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">
          5.Checking light reflection:
        </Typography>
        <Typography className="text">
          Genuine jewelry usually reflects light better than counterfeits. This
          is due to the use of higher quality materials.
        </Typography>
      </Grid>
      <Grid className="bullet-point-wrapper">
        <Typography className="text black">
          6.Appearance quality check:
        </Typography>
        <Typography className="text">
          Original ornaments usually have a polished and smooth appearance.In
          counterfeit samples, the appearance of the product usually has
          defects.
        </Typography>
      </Grid>
      <Grid className="conclusion">
        <Typography className="title">Conclusion</Typography>
        <Typography className="description">
          Genuine jewelry usually has quality, well-made clasps and clasps,
          while fake jewelry has weaker, messier clasps. Also, genuine jewelry
          weighs more than fakes because it is made of higher quality
          materials.In genuine jewelry, brand markings and logos are very clear
          and precise, but in fakes, these markings are usually lower quality
          and faded. Also, genuine jewelry is non-magnetic, while counterfeit
          jewelry is typically magnetic and attracted to a magnet.In terms of
          light reflection, genuine jewelry usually reflects better than
          counterfeits. In addition, genuine jewelry has a polished and smooth
          appearance, while the appearance of counterfeit products usually has
          imperfections.
        </Typography>
      </Grid>
    </Grid>
  );
});
