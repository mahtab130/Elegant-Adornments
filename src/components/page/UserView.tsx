import { Grid, Typography } from "@mui/material";
import { userViewSX } from "../../helper/styleObjects/users";
import { ContentSection } from "../common/ContentSection";
import { useNavigate, useParams } from "react-router-dom";
import { handleImageUrl } from "../../helper/utils/handlers";
import { useGetUserById } from "../../helper/services/hooks/all";
import { SPACE_H3 } from "../../helper/constants/spaces";
import { CustomButton } from "../controller/CustomButton";

export const UserView = () => {
  const { id: currentId } = useParams();
  const navigate = useNavigate();

  const { data: userById } = useGetUserById(currentId || "");

  const { lastName, email, firstName, imageUrl, userName } =
    (userById as unknown as { data: Users & { password: string } })?.data ?? {};

  return (
    <Grid sx={userViewSX}>
      <ContentSection
        image={handleImageUrl(imageUrl || "")}
        title={"User View"}
        setting={{
          sx: {
            "& .left-section": {
              display: { xs: "none", md: "flex" },
              "& .image": {
                height: { md: "440px" },
                mt: SPACE_H3,
                objectFit: "cover",
                borderRadius: "14px",
              },
            },
          },
        }}
        content={
          <Grid className="content-view">
            <Grid className="box-item">
              <Typography>Name:</Typography>
              <Typography className="value">
                {firstName + " " + lastName}
              </Typography>
            </Grid>
            <Grid className="box-item">
              <Typography>Name:</Typography>
              <Typography className="value">{userName}</Typography>
            </Grid>
            <Grid className="box-item">
              <Typography>Name:</Typography>
              <Typography className="value">{email}</Typography>
            </Grid>
            <Grid className="button-wrapper">
              <CustomButton
                text={"Edit the user"}
                variant="contained"
                onClick={() => navigate(`/edit/${currentId}`)}
              />
            </Grid>
          </Grid>
        }
      />
    </Grid>
  );
};
