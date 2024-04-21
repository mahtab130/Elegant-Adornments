import { FC } from "react";

import { useRoutes } from "react-router-dom";
import { Grid, ThemeProvider } from "@mui/material";

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
  createTheme,
} from "@mui/material/styles";

import { routes } from "../../routes";
import { layoutSX } from "../../helper/styleObjects/main";
import { COLOR_TEXT } from "../../helper/constants/colors";

const MainLayout: FC = () => {
  const children = useRoutes(routes);

  const themeMUI = createTheme({
    typography: { fontFamily: "Garamond", allVariants: { color: COLOR_TEXT } },
  });

  const materialTheme = materialExtendTheme(themeMUI);

  return (
    <ThemeProvider theme={themeMUI}>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <Grid sx={layoutSX}>{children}</Grid>
      </MaterialCssVarsProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
