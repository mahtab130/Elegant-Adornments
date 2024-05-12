import { FC } from "react";

import { find, map } from "lodash";
import { useParams } from "react-router-dom";
import { Grid, SxProps, Theme, Typography } from "@mui/material";

import {
  SPACE_D2,
  SPACE_H2,
  SPACE_H3,
  SPACE_M1,
  SPACE_M2,
  SPACE_S2,
} from "../../../helper/constants/spaces";
import {
  FONT_BODY_MEDIUM2,
  FONT_BODY_SMALL,
  FONT_TITLE_LARGE,
  FONT_WEIGHT_BLOD,
} from "../../../helper/constants/fonts";
import { blogs } from "../../../data/blogs";
import { MAX_WIDTH } from "../../../helper/constants/static";
import { COLOR_WHITE } from "../../../helper/constants/colors";
import { CustomBreadcrumbs } from "../../controller/CustomBreadcrumbs";
import { bookIcon, clockIcon, dateIcon } from "../../other/SvgComponent";
import { AnimationSlideIn } from "../../common/AnimateComponent";

export const BlogDetail: FC = () => {
  const { id: currentId } = useParams();

  const { image, title, date, studyTime, writer, content } =
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
            {map(otherInfo, ({ name, icon, title }) => (
              <Grid className="item">
                {icon}
                <Typography className="name">
                  {title} : {name}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid className="description">{content}</Grid>
        </Grid>
      </Grid>
    </AnimationSlideIn>
  );
};

const blogDetailSX = (image?: string): SxProps<Theme> => ({
  mx: "auto",
  pt: SPACE_H3,
  my: SPACE_H2,
  width: "100%",
  maxWidth: MAX_WIDTH,
  "& .container": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& .image-background": {
      width: "100%",
      mt: SPACE_M2,
      px: SPACE_H3,
      height: "450px",
      display: "flex",
      borderRadius: "12px",
      alignItems: "center",
      backgroundSize: "cover",
      justifyContent: "center",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      background: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 100%,rgba(0, 0, 0, 0.65) 100%), url(${image})`,
      "& .title": {
        color: COLOR_WHITE,
        textAlign: "center",
        fontSize: FONT_TITLE_LARGE,
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
    "& .description": {
      width: "100%",
      mt: SPACE_M1,
      fontSize: FONT_BODY_MEDIUM2,
      fontWeight: FONT_WEIGHT_BLOD,
      color: "#6A6A6A",
      mb: SPACE_M1,
    },
    "& .other-info-wrapper": {
      mt: SPACE_M2,
      display: "flex",
      gap: SPACE_D2,
      alignItems: "center",
      "& .item": {
        gap: SPACE_S2,
        display: "flex",
        alignItems: "center",
        "& .name": {
          color: "#939393",
          fontSize: FONT_BODY_SMALL,
          fontWeight: FONT_WEIGHT_BLOD,
        },
      },
    },
  },
});
