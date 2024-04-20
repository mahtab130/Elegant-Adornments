import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";
import { Grid, ThemeProvider } from "@mui/material";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
  createTheme,
} from "@mui/material/styles";

const MainLayout = () => {
  const children = useRoutes(routes);

  const themeMUI = createTheme({});
  const materialTheme = materialExtendTheme(themeMUI);

  return (
    <ThemeProvider theme={themeMUI}>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <Grid sx={{ width: "100%", height: "100vh", maxWidth: "1200px" }}>
          {children}
        </Grid>
      </MaterialCssVarsProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
