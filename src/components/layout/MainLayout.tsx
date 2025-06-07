import { FC, useEffect } from "react";

import { useLocation, useRoutes } from "react-router-dom";
import { Grid, IconButton, ThemeProvider } from "@mui/material";

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
import {
  FONT_WEIGHT_BLOD,
  FONT_WEIGHT_REGULAR,
} from "../../helper/constants/fonts";
import {
  COLOR_PRIMARY,
  COLOR_TEXT,
  COLOR_WHITE,
} from "../../helper/constants/colors";
import { Loading } from "../common/Loading";
import { SnackbarProvider } from "notistack";
import { errorAlertICON, successAlertICON } from "../other/SvgComponent";
import { useProductSearch } from "../../helper/services/hooks/all";

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

  const { isLoading } = useProductSearch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider theme={themeMUI}>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <MotionConfig>
          <CartProvider>
            <SnackbarProvider
              iconVariant={{
                success: (
                  <IconButton className="alert-icon">
                    {successAlertICON()}
                  </IconButton>
                ),

                error: (
                  <IconButton className="alert-icon">
                    {errorAlertICON()}
                  </IconButton>
                ),
              }}
              style={{
                direction: "ltr",
                backgroundColor: COLOR_WHITE,
                color: COLOR_TEXT,
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: FONT_WEIGHT_BLOD,
                lineHeight: "normal",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px 0px rgba(145, 158, 171, 0.16)",
              }}
            >
              {isLoading ? (
                <Loading />
              ) : (
                <Grid sx={mainLayoutSX} className="main-layout">
                  {includes(emptyContainerNav, pathname) || <Navbar />}
                  {children}
                  {includes(emptyContainerFooter, pathname) || <Footer />}
                </Grid>
              )}
            </SnackbarProvider>
          </CartProvider>
        </MotionConfig>
      </MaterialCssVarsProvider>
    </ThemeProvider>
  );
};

export default MainLayout;

const emptyContainerNav = ["/sign-up", "/login"];
const emptyContainerFooter = ["/sign-up", "/login", "/search"];
