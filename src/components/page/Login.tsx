import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import {
  COLOR_SECEONDRY,
  COLOR_TEXT_GRAY,
} from "../../helper/constants/colors";
import { googleIcon } from "../other/SvgComponent";
import { CustomButton } from "../controller/CustomButton";
import { AnimationFadeIn } from "../common/AnimateComponent";
import { CustomTextfield } from "../controller/CustomTextfield";

import { loginSX } from "../../helper/styleObjects/login";
import { useLogin } from "../../helper/services/hooks/all";
import { useFormik } from "formik";
import { errorAlert, successAlert } from "../../helper/utils/messege";
import { LoginValidation } from "../../helper/utils/validations/login";

const Login: FC = () => {
  const navigate = useNavigate();

  const { mutateAsync: loginUser, isPending } = useLogin();

  const formIK = useFormik({
    initialValues: { email: "", password: "" },
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: LoginValidation(),
    onSubmit: async (values) => {
      try {
        const res = await loginUser(values);

        const token = res?.data?.token;
        const user = res?.data?.user;

        if (!token || !user) {
          throw new Error("Invalid login response");
        }

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        successAlert({ title: "Login was Successful" });
        navigate("/");
      } catch (err) {
        errorAlert({ title: "Login failed. Check credentials." });
        console.error("Login error:", err);
      }
    },
  });

  return (
    <AnimationFadeIn>
      <Grid container sx={loginSX}>
        <Grid container xs={12} md={5.5} className="container">
          <Box
            component="form"
            className="inputs-wrapper"
            onSubmit={formIK.handleSubmit}
          >
            <Grid className="title-wrapper">
              <Typography className="title">Login</Typography>
              <Typography className="subtitle">
                Dont have an acount?
                <Box component="span" onClick={() => navigate("/sign-up")}>
                  Create now
                </Box>
              </Typography>
            </Grid>
            <Grid className="inputs">
              <CustomTextfield
                className="input"
                variant="outlined"
                placeholder="Email"
                name="email"
                customLabel="Email"
                value={formIK.values.email}
                onChange={formIK.handleChange}
                errorMessage={
                  formIK.errors.email
                    ? {
                        text: formIK.errors.email,
                        type: "error",
                      }
                    : undefined
                }
              />
              <CustomTextfield
                type="password"
                className="input"
                variant="outlined"
                name="password"
                placeholder="Password"
                customLabel="Password"
                value={formIK.values.password}
                onChange={formIK.handleChange}
                errorMessage={
                  formIK.errors.password
                    ? {
                        text: formIK.errors.password,
                        type: "error",
                      }
                    : undefined
                }
              />
              <Grid className="checkbox-wrapper">
                {/* <CustomCheckbox label={"Save Account"} /> */}
                <Typography className="forgot-pass-text">
                  Forgot password?
                </Typography>
              </Grid>
            </Grid>
            <Grid className="buttons-wrapper">
              <CustomButton
                type="submit"
                disabled={isPending}
                className="button"
                variant="contained"
                customColor={COLOR_SECEONDRY}
                text={"Login"}
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
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </AnimationFadeIn>
  );
};

export default Login;
