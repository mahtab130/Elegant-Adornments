import { memo } from "react";

import { Grid, SxProps, Theme, Typography } from "@mui/material";

import {
  FONT_TITLE_SMALL,
  FONT_WEIGHT_BLOD,
  FONT_BODY_MEDIUM2,
} from "../../helper/constants/fonts";
import { AnimationSlideIn } from "./AnimateComponent";
import { CustomImage } from "../controller/CustomImage";
import { SPACE_S1 } from "../../helper/constants/spaces";
import { COLOR_WHITE } from "../../helper/constants/colors";

export const NoOptionsComponent = memo<INoOptionsComponent>(
  ({ imageSrc, searchKey, text, imageSize }) => {
    return (
      <AnimationSlideIn direction="left">
        <Grid sx={noOptionsComponentSX(imageSize)} className="empty-section">
          <CustomImage className={"empty-image"} src={imageSrc} />
          {searchKey ? (
            <Typography className="keword-not-exist">
              NO result for “{searchKey}”
            </Typography>
          ) : null}
          <Typography className="not-exist-text">
            {text ||
              " Sorry, but I could not find any items that match the keyword you provided"}
          </Typography>
        </Grid>
      </AnimationSlideIn>
    );
  }
);

export const EmptyLastCenterJustify = memo<IEmptyLastCenterJustify>(
  ({ xs, md, length, even }) => {
    return !even ? (
      length % 3 == 2 && <Grid item xs={xs || 5.9} md={md || 3.9}></Grid>
    ) : (
      <>
        {length % 2 === 0 && length % 4 !== 0 ? (
          <Grid item xs={12} md={6}></Grid>
        ) : null}
        {length % 2 !== 0 || length == 3 ? (
          <Grid item xs={xs || 5.9} md={md || 3.9}></Grid>
        ) : null}
      </>
    );
  }
);

const noOptionsComponentSX = (imageSize?: TStandardSize): SxProps<Theme> => ({
  "&.empty-section": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& .empty-image": {
      width:
        imageSize == "small"
          ? "300px"
          : imageSize == "medium"
          ? "500px"
          : imageSize == "large"
          ? "1080px"
          : "300px",
    },
    "& .keword-not-exist": {
      mt: SPACE_S1,
      color: COLOR_WHITE,
      fontSize: FONT_TITLE_SMALL,
      fontWeight: FONT_WEIGHT_BLOD,
    },
    "& .not-exist-text": {
      color: COLOR_WHITE,
      fontSize: FONT_BODY_MEDIUM2,
      fontWeight: FONT_WEIGHT_BLOD,
    },
  },
});
