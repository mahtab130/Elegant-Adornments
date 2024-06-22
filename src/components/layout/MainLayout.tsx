import { FC, useEffect, useState } from "react";

import { useLocation, useRoutes } from "react-router-dom";
import { Grid, ThemeProvider } from "@mui/material";

import {
  createTheme,
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";

import { includes } from "lodash";
import { MotionConfig } from "framer-motion";
import { CartProvider } from "react-use-cart";

import { routes } from "../../routes";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { FONT_FAMILY } from "../../helper/constants/static";
import { mainLayoutSX } from "../../helper/styleObjects/main";
import { FONT_WEIGHT_REGULAR } from "../../helper/constants/fonts";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helper/constants/colors";
import { Loading } from "../common/Loading";

const MainLayout: FC = () => {
  const children = useRoutes(routes);

  const { pathname } = useLocation();

  const themeMUI = createTheme({
    palette: { primary: { main: COLOR_PRIMARY } },
    typography: {
      fontFamily: FONT_FAMILY,
      allVariants: { color: COLOR_TEXT, fontWeight: FONT_WEIGHT_REGULAR },
    },
  });

  const materialTheme = materialExtendTheme(themeMUI);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider theme={themeMUI}>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <MotionConfig>
          <CartProvider>
            {isLoading ? (
              <Loading />
            ) : (
              <Grid sx={mainLayoutSX} className="main-layout">
                {includes(emptyContainerNav, pathname) || <Navbar />}
                {children}
                {includes(emptyContainerFooter, pathname) || <Footer />}
              </Grid>
            )}
          </CartProvider>
        </MotionConfig>
      </MaterialCssVarsProvider>
    </ThemeProvider>
  );
};

export default MainLayout;

const emptyContainerNav = ["/sign-up", "/login"];
const emptyContainerFooter = ["/sign-up", "/login", "/search"];
