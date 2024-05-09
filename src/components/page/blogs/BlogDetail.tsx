import { Grid, SxProps, Theme } from "@mui/material";
import { FC } from "react";

export const BlogDetail: FC = () => {
  return <Grid sx={blogDetailSX}>Blog details</Grid>;
};

const blogDetailSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
};
