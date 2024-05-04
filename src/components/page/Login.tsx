import { FC, memo } from "react";

import { useNavigate } from "react-router-dom";
import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";

import {
  SPACE_D1,
  SPACE_D2,
  SPACE_M3,
  SPACE_M4,
  SPACE_S2,
  SPACE_S3,
} from "../../helper/constants/spaces";
import {
  COLOR_WHITE,
  COLOR_SECEONDRY,
  COLOR_TEXT_GRAY,
  COLOR_TEXT_WHITE,
  COLOR_MEDIUM_GRAY,
} from "../../helper/constants/colors";
import {
  FONT_BODY_LARGE,
  FONT_LABEL_LARGE,
  FONT_LABEL_SMALL,
  FONT_WEIGHT_BLOD,
  FONT_LABEL_MEDIUM,
} from "../../helper/constants/fonts";
import { googleIcon } from "../other/SvgComponent";
import { CustomButton } from "../controller/CustomButton";
import { AnimationFadeIn } from "../common/AnimateComponent";
import { CustomCheckbox } from "../controller/CustomCheckbox";
import { CustomTextfield } from "../controller/CustomTextfield";

import BackImage from "../../assets/images/login/back-login.jpg";

interface ILogin {
  isSignUp?: boolean;
}

const Login: FC<ILogin> = ({ isSignUp }) => {
  return (
    <AnimationFadeIn>
      <Grid container sx={loginSX}>
        <Grid container xs={12} md={5.5} className="container">
          <AuthenticationForm isSignUp={isSignUp} />
        </Grid>
      </Grid>
    </AnimationFadeIn>
  );
};

export default Login;

const AuthenticationForm = memo<ILogin>(({ isSignUp }) => {
  const navigate = useNavigate();

  return (
    <Grid className="inputs-wrapper">
      <Grid className="title-wrapper">
        <Typography className="title">
          {isSignUp ? "Sign Up" : "Login"}
        </Typography>
        <Typography className="subtitle">
          {isSignUp ? (
            "join us now to access unlimited features and seamless user experience"
          ) : (
            <>
              Dont have an acount?
              <Box component="span" onClick={() => navigate("/sign-up")}>
                Create now
              </Box>
            </>
          )}
        </Typography>
      </Grid>
      <Grid className="inputs">
        {isSignUp ? (
          <CustomTextfield
            className="input"
            variant="outlined"
            placeholder={"name"}
            customLabel={"name"}
          />
        ) : null}
        <CustomTextfield
          className="input"
          customLabel="Email"
          placeholder="Email"
          variant="outlined"
        />
        <CustomTextfield
          idPasswordField
          className="input"
          variant="outlined"
          customLabel="Password"
          placeholder="Password"
        />
        <Grid className="checkbox-wrapper">
          <CustomCheckbox
            label={
              isSignUp
                ? "Bu signing up, you agree to our Terms of services"
                : "Save Account"
            }
          />
          {isSignUp ? null : (
            <Typography className="forgot-pass-text">
              Forgot password?
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid className="buttons-wrapper">
        <CustomButton
          className="button"
          variant="contained"
          customColor={COLOR_SECEONDRY}
          text={isSignUp ? "Sign In" : "Login"}
          onClick={() => navigate("/")}
        />
        <Typography className="or">
          <Box component="span" className="border"></Box>
          <Box component="span" className="text">
            Or
          </Box>
        </Typography>
        <CustomButton
          className="button"
          variant="outlined"
          startIcon={googleIcon()}
          text="Continue with Google"
          customColor={COLOR_TEXT_GRAY}
        />
        {isSignUp ? (
          <Typography className="have-account">
            Already have an acount?{" "}
            <Box component="span" onClick={() => navigate("/login")}>
              Login
            </Box>
          </Typography>
        ) : null}
      </Grid>
    </Grid>
  );
});

const loginSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${BackImage})`,
  "& .container": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: COLOR_WHITE,
    "& .inputs-wrapper": {
      width: "fit-content",
      maxWidth: "350px",
      "& .title-wrapper": {
        mb: SPACE_D1,
        width: "100%",
        "& .title": {
          fontSize: FONT_BODY_LARGE,
          fontWeight: FONT_WEIGHT_BLOD,
        },
        "& .subtitle": {
          color: COLOR_TEXT_GRAY,
          fontSize: FONT_LABEL_MEDIUM,
          fontWeight: FONT_WEIGHT_BLOD,
          "& span": {
            cursor: "pointer",
            color: COLOR_SECEONDRY,
            textDecoration: "underline",
          },
        },
      },
      "& .inputs": {
        display: "flex",
        rowGap: SPACE_M4,
        width: "350px",
        flexDirection: "column",
        "& .input": {
          "& .MuiInputBase-root": {
            height: "45px",
            borderRadius: "8px",
            "& fieldset": {
              border: "1px solid" + COLOR_TEXT_WHITE,
            },
          },
        },
        "& .checkbox-wrapper": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "& .checkbox-wrapper": {
            width: "fit-content",
          },
          "& .forgot-pass-text": {
            color: COLOR_SECEONDRY,
            textDecoration: "underline",
            fontSize: FONT_LABEL_MEDIUM,
            fontWeight: FONT_WEIGHT_BLOD,
          },
        },
      },
      "& .buttons-wrapper": {
        mt: SPACE_D2,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        "& .button": {
          alignItems: "center",
          fontSize: FONT_LABEL_LARGE,
          "& span": {
            pr: SPACE_S2,
          },
        },
        "& .or": {
          my: SPACE_M3,
          position: "relative",
          textAlign: "center",
          "& .text": {
            p: SPACE_S3,
            zIndex: "33",
            position: "relative",
            color: COLOR_MEDIUM_GRAY,
            fontSize: FONT_LABEL_SMALL,
            backgroundColor: COLOR_WHITE,
          },
          "& .border": {
            zIndex: 0,
            height: "1px",
            width: "100%",
            left: "0",
            top: "13px",
            position: "absolute",
            backgroundColor: COLOR_TEXT_WHITE,
          },
        },
        "& .have-account": {
          mt: SPACE_M3,
          textAlign: "center",
          color: COLOR_TEXT_GRAY,
          fontSize: FONT_LABEL_MEDIUM,
          fontWeight: FONT_WEIGHT_BLOD,
          "& span": {
            cursor: "pointer",
            color: COLOR_SECEONDRY,
            textDecoration: "underline",
          },
        },
      },
    },
  },
};
