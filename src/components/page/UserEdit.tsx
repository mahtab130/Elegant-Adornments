import { useFormik } from "formik";
import { Box, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { CustomTitle } from "../common/CustomTitle";
import { CustomSelect } from "../controller/CustomSelect";
import { CustomButton } from "../controller/CustomButton";
import { userEditSX } from "../../helper/styleObjects/users";
import { updateUser } from "../../helper/services/configs/api";
import { CustomTextfield } from "../controller/CustomTextfield";
import { useGetUserById } from "../../helper/services/hooks/all";
import { errorAlert, successAlert } from "../../helper/utils/messege";
import { validationRegister } from "../../helper/utils/validations/register";

export const UserEdit = () => {
  const navigate = useNavigate();
  const { id: currentId } = useParams();

  const { data: userById } = useGetUserById(currentId || "");
  const { lastName, email, firstName, userName, gender } =
    (userById as unknown as { data: Users & { password: string } })?.data ?? {};

  const formIK = useFormik({
    initialValues: {
      email: email || "",
      gender: gender || 0,
      lastName: lastName || "",
      userName: userName || "",
      firstName: firstName || "",
    },
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationRegister(),
    onSubmit: async (values) => {
      try {
        await updateUser(currentId || "", values);

        successAlert({ title: "Edit was Successful" });
        navigate(`/view/${currentId}`);
      } catch (err) {
        errorAlert({ title: "Edit failed. Check credentials." });
        console.error("Login error:", err);
      }
    },
  });

  return (
    <Grid sx={userEditSX}>
      <Grid className="content">
        <Box component="form" className="form" onSubmit={formIK.handleSubmit}>
          <CustomTitle title="Edit User" />
          <Grid container className="form-content">
            <Grid xs={12} md={5.9}>
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
            </Grid>
            <Grid xs={12} md={5.9}>
              <CustomTextfield
                className="input"
                variant="outlined"
                placeholder="Last Name"
                customLabel="Last Name"
                name="lastName"
                value={formIK.values.lastName}
                onChange={formIK.handleChange}
                errorMessage={
                  formIK.errors.lastName
                    ? {
                        text: formIK.errors.lastName,
                        type: "error",
                      }
                    : undefined
                }
              />
            </Grid>
            <Grid xs={12} md={5.9}>
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
            </Grid>
            <Grid xs={12} md={5.9}>
              <CustomTextfield
                className="input"
                variant="outlined"
                placeholder="userName"
                customLabel="userName"
                name="userName"
                value={formIK.values.userName}
                onChange={formIK.handleChange}
                errorMessage={
                  formIK.errors.userName
                    ? {
                        text: formIK.errors.userName,
                        type: "error",
                      }
                    : undefined
                }
              />
            </Grid>
            <Grid xs={12} md={5.9}>
              <CustomSelect
                // className="input"
                placeholder="gender"
                customLabel="gender"
                name="gender"
                value={(formIK && +formIK.values["gender"]) ?? ""}
                onChange={formIK && formIK.handleChange}
                items={[
                  { label: "female", value: 1 },
                  { label: "male", value: 2 },
                  { label: "other", value: 3 },
                ]}
                errorMessage={
                  formIK.errors.gender
                    ? {
                        text: formIK.errors.gender,
                        type: "error",
                      }
                    : undefined
                }
              />
            </Grid>
          </Grid>
          <CustomButton text={"Submit"} type="submit" variant="contained" />
        </Box>
      </Grid>
    </Grid>
  );
};
