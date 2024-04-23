import { Grid, SxProps, Theme } from "@mui/material";
import { memo } from "react";

export const PageProvider = memo<{
  children: JSX.Element;
}>(({ children }) => {
  return (
    <Grid sx={contentProviderSX} className="content-provider">
      {children}
    </Grid>
  );
});

const contentProviderSX: SxProps<Theme> = {
  mx: "auto",
  width: "100%",
  display: "flex",
  maxWidth: "1400px",
  alignItems: "center",
  justifyContent: "space-between",
};
