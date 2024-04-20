import { Grid, SxProps, Theme } from "@mui/material";

const Home = () => {
  return <Grid className="home-container" sx={homeSX}></Grid>;
};

export default Home;

const homeSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  backgroundColor: "red",
};
