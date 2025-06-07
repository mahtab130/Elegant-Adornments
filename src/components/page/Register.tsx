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
import { useFormik } from "formik";
import { validationRegister } from "../../helper/utils/validations/register";
import { errorAlert, successAlert } from "../../helper/utils/messege";
import { useCreateUser } from "../../helper/services/hooks/all";

const Register: FC = () => {
  const navigate = useNavigate();

  const { mutateAsync: userCreate, isPending } = useCreateUser();

  const formIK = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      userName: "",
    },
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationRegister(),
    onSubmit: async (values) => {
      try {
        const res = await userCreate(values);

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
            onSubmit={formIK.handleSubmit}
            className="inputs-wrapper"
          >
            <Grid className="title-wrapper">
              <Typography className="title">Sign Up</Typography>
              <Typography className="subtitle">
                join us now to access unlimited features and seamless user
                experience
              </Typography>
            </Grid>
            <Grid className="inputs">
              <CustomTextfield
                className="input"
                variant="outlined"
                placeholder={"first Name"}
                customLabel="First Name"
                name="firstName"
                value={formIK.values.firstName}
                onChange={formIK.handleChange}
                errorMessage={
                  formIK.errors.firstName
                    ? {
                        text: formIK.errors.firstName,
                        type: "error",
                      }
                    : undefined
                }
              />
              <CustomTextfield
                className="input"
                variant="outlined"
                placeholder="email"
                customLabel="email"
                name="email"
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
                placeholder="Password"
                customLabel="Password"
                name="password"
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
            </Grid>
            <Grid className="buttons-wrapper">
              <CustomButton
                disabled={isPending}
                type="submit"
                className="button"
                variant="contained"
                customColor={COLOR_SECEONDRY}
                text={"Sign In"}
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

              <Typography className="have-account">
                Already have an acount?{" "}
                <Box component="span" onClick={() => navigate("/login")}>
                  Login
                </Box>
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </AnimationFadeIn>
  );
};

export default Register;
