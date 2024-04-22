import { FC } from "react";

import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
  createTheme,
} from "@mui/material/styles";

import { routes } from "../../routes";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helper/constants/colors";

const MainLayout: FC = () => {
  const children = useRoutes(routes);

  const themeMUI = createTheme({
    palette: { primary: { main: COLOR_PRIMARY } },
    // components: {
    //   MuiButton: {
    //     styleOverrides: { colorPrimary: { ":hover": COLOR_SECEONDRY } },
    //   },
    // },
    typography: { fontFamily: "Garamond", allVariants: { color: COLOR_TEXT } },
  });

  const materialTheme = materialExtendTheme(themeMUI);

  return (
    <ThemeProvider theme={themeMUI}>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        {children}
      </MaterialCssVarsProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
