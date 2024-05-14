import { memo } from "react";

import { Grid, Typography } from "@mui/material";

import { CustomImage } from "../controller/CustomImage";
import { profileCardSX } from "../../helper/styleObjects/common";

interface IProfileCard {
  name: string;
  image: string;
}

export const ProfileCard = memo<IProfileCard>(({ image, name }) => {
  return (
    <Grid sx={profileCardSX}>
      <CustomImage className="profile-image" src={image} />
      <Typography className="profile-name">{name || "__________"}</Typography>
    </Grid>
  );
});
