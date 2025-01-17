import React from "react";
import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material";
import Header from "./component/header/Header";
import AboutMe from "./component/body/AboutMe";
import MyServices from "./component/body/MyServices";
import MySkills from "./component/body/MySkills";
import ContactForm from "./component/body/Contact";
import Footer from "./component/footer/Footer";

const BodyFrame = React.lazy(() => import("./component/body/BodyFrame"));
const App = () => {
  return (
    <>
      <CssBaseline />
      <Box>
        <Box
          sx={{
            background: "#000000", // Dark gradient
          }}
        >
          <Header />

          <Box>
            <BodyFrame></BodyFrame>
          </Box>
        </Box>

        <Box>
          <AboutMe></AboutMe>
        </Box>

        <Box
          sx={{
            background: "#17202a", // Dark gradient
            //height: "100vh", // Full height of the viewport
          }}
        >
          <MyServices></MyServices>
        </Box>

        <Box
          sx={{
            background: "#17202a", // Dark gradient
            //height: "100vh", // Full height of the viewport
          }}
        >
          <MySkills></MySkills>
        </Box>

        <Box
          sx={{
            background: "#17202a", // Dark gradient
            //height: "100vh", // Full height of the viewport
          }}
        >
          <ContactForm></ContactForm>
        </Box>

        <Box>
          <Footer></Footer>
        </Box>
      </Box>
    </>
  );
};

export default App;
