import { FC } from "react";

import { useRoutes } from "react-router-dom";
import { Grid, ThemeProvider } from "@mui/material";

import {
  createTheme,
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { MotionConfig } from "framer-motion";

import { routes } from "../../routes";
import { FONT_FAMILY } from "../../helper/constants/static";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helper/constants/colors";
import { FONT_WEIGHT_REGULAR } from "../../helper/constants/fonts";
import { Navbar } from "../common/Navbar";
import { Footer } from "../common/Footer";
import { mainLayoutSX } from "../../helper/styleObjects/main";

const MainLayout: FC = () => {
  const children = useRoutes(routes);

  const themeMUI = createTheme({
    palette: { primary: { main: COLOR_PRIMARY } },
    typography: {
      fontFamily: FONT_FAMILY,
      allVariants: { color: COLOR_TEXT, fontWeight: FONT_WEIGHT_REGULAR },
    },
  });

  const materialTheme = materialExtendTheme(themeMUI);

  return (
    <ThemeProvider theme={themeMUI}>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <MotionConfig>
          <Grid sx={mainLayoutSX}>
            <Navbar />
            {children}
            <Footer />
          </Grid>
        </MotionConfig>
      </MaterialCssVarsProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
