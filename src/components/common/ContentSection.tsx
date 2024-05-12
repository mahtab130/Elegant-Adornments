import { memo } from "react";

import { isString, merge } from "lodash";
import { Box, Grid, SxProps, Theme } from "@mui/material";

import { CustomTitle } from "./CustomTitle";
import { AnimationSlideIn } from "./AnimateComponent";
import { contentProviderSX } from "../../helper/styleObjects/common";

import vector2 from "../../assets/images/vectors/vector-flower-white.webp";

export const ContentSection = memo<IContentSection<SxProps<Theme>>>(
  ({ content, image, title, setting }) => {
    const { reverse, imageWidth, sx, vectorSrc } = setting ?? {};

    const mergeSx = merge({}, contentProviderSX(reverse, imageWidth), sx);

    return (
      <Grid container sx={mergeSx} className="content-provider">
        <Grid item xs={12} md={5.5} className="right-section">
          <AnimationSlideIn direction="left">
            <>
              <CustomTitle title={title} />
              <Box
                component="img"
                className="vector"
                src={vectorSrc ? vectorSrc : vector2}
              />
              <Grid className="content">{content}</Grid>
            </>
          </AnimationSlideIn>
        </Grid>
        <Grid item xs={12} md={6} className="left-section">
          <AnimationSlideIn direction="right">
            {isString(image) ? (
              <Box component="img" className="image" src={image} />
            ) : (
              image
            )}
          </AnimationSlideIn>
        </Grid>
      </Grid>
    );
  }
);
