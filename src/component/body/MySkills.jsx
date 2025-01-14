import { Box, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";

const MySkills = () => {
  return (
    <>
      <Box
        id="skills"
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Paper
          elevation={16}
          sx={{
            padding: 5,
            width: "100%",
            height: "100%",
            backgroundColor: "#626b75",
            margin: 2,
            borderRadius: "15px",
          }}
          variant="elevation"
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            MY SKILLS
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "black" }}
            fontFamily="cursive"
          >
            Programming Languages & Frameworks:
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
              pl: 2,
              color: "#333",
              "& li": { marginBottom: 1, display: "list-item" },
              fontWeight: "bold",
            }}
          >
            <ListItem>
              Proficient in Java with hands-on experience in Spring Boot for
              creating dynamic, high-performance backend systems.
            </ListItem>
            <ListItem>
              Skilled in React.js, developing modern, responsive, and
              user-friendly front-end interfaces.
            </ListItem>
            <ListItem>
              Strong foundation in Python for versatile programming needs and
              automation.
            </ListItem>
          </List>

          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "black" }}
            fontFamily="cursive"
          >
            Tools & Technologies:
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
              pl: 2,
              color: "#333",
              "& li": { marginBottom: 1, display: "list-item" },
              fontWeight: "bold",
            }}
          >
            <ListItem>
              Expertise in Git for version control and seamless team
              collaboration.
            </ListItem>
            <ListItem>
              Knowledge of Docker, Jenkins, and GitHub Actions for CI/CD
              pipelines.
            </ListItem>
            <ListItem>
              Proficient in databases like MySQL and PL/SQL, with experience in
              handling large datasets and crafting optimized queries.
            </ListItem>
            <ListItem>
              Experienced in using Splunk for production monitoring and
              debugging.
            </ListItem>
          </List>

          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "black" }}
            fontFamily="cursive"
          >
            Development Practices:
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
              pl: 2,
              color: "#333",
              "& li": { marginBottom: 1, display: "list-item" },
              fontWeight: "bold",
            }}
          >
            <ListItem>
              End-to-end application development and maintenance.
            </ListItem>
            <ListItem>
              Strong skills in backend data analysis and system monitoring to
              ensure operational stability.
            </ListItem>
            <ListItem>
              Business report generation to support decision-making processes.
            </ListItem>
          </List>

          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "black" }}
            fontFamily="cursive"
          >
            Other Skills:
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
              pl: 2,
              color: "#333",
              "& li": { marginBottom: 1, display: "list-item" },
              fontWeight: "bold",
            }}
          >
            <ListItem>
              Responsive web design with tools like Tailwind CSS and
              Material-UI.
            </ListItem>
            <ListItem>
              Proficient in Microsoft Office Suite for documentation and
              presentations.
            </ListItem>
          </List>
        </Paper>
      </Box>

      {/* <Grid item xs={12} sm={6}>
          <Box
            sx={{
              padding: 3,
              backgroundColor: "#fff",
              borderRadius: 4,
              boxShadow: " 1px 5px 5px  rgba(235, 13, 13, 0.9)",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "black" }}
            >
              Programming Languages & Frameworks:
            </Typography>
            <List
              sx={{
                listStyleType: "disc",
                pl: 2,
                color: "#333",
                "& li": { marginBottom: 1, display: "list-item" },
                fontWeight: "bold",
              }}
            >
              <ListItem>
                Proficient in Java with hands-on experience in Spring Boot for
                creating dynamic, high-performance backend systems.
              </ListItem>
              <ListItem>
                Skilled in React.js, developing modern, responsive, and
                user-friendly front-end interfaces.
              </ListItem>
              <ListItem>
                Strong foundation in Python for versatile programming needs and
                automation.
              </ListItem>
            </List>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              padding: 3,
              backgroundColor: "#fff",
              borderRadius: 4,
              boxShadow: " 1px 5px 5px  rgba(235, 13, 13, 0.9)",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "black" }}
            >
              Tools & Technologies:
            </Typography>
            <List
              sx={{
                listStyleType: "disc",
                pl: 2,
                color: "#333",
                "& li": { marginBottom: 1, display: "list-item" },
                fontWeight: "bold",
              }}
            >
              <ListItem>
                Expertise in Git for version control and seamless team
                collaboration.
              </ListItem>
              <ListItem>
                Knowledge of Docker, Jenkins, and GitHub Actions for CI/CD
                pipelines.
              </ListItem>
              <ListItem>
                Proficient in databases like MySQL and PL/SQL, with experience
                in handling large datasets and crafting optimized queries.
              </ListItem>
              <ListItem>
                Experienced in using Splunk for production monitoring and
                debugging.
              </ListItem>
            </List>
          </Box>
        </Grid> */}
    </>
  );
};

export default MySkills;
