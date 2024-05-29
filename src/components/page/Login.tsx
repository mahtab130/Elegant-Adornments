import { FC, memo } from "react";

import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import {
  COLOR_SECEONDRY,
  COLOR_TEXT_GRAY,
} from "../../helper/constants/colors";
import { googleIcon } from "../other/SvgComponent";
import { CustomButton } from "../controller/CustomButton";
import { AnimationFadeIn } from "../common/AnimateComponent";
import { CustomCheckbox } from "../controller/CustomCheckbox";
import { CustomTextfield } from "../controller/CustomTextfield";

import { loginSX } from "../../helper/styleObjects/login";

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
            customLabel="Name"
          />
        ) : null}
        <CustomTextfield
          className="input"
          variant="outlined"
          placeholder="Email"
          customLabel="Email"
        />
        <CustomTextfield
          type="password"
          className="input"
          variant="outlined"
          placeholder="Password"
          customLabel="Password"
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
