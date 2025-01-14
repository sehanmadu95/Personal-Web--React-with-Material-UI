import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export default function ActionAreaCard(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          height: "100%", // Ensure consistent height
          minHeight: 370, // Minimum height for cards
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)",
          backgroundColor: "#1c1c1c",
          border: "4px solid #fff",
          "&:hover": {
            border: "4px solid red", // Change background color to red on hover
          },
        }}
      >
        <CardActionArea
          sx={{
            borderRadius: "16px",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={props.img}
            alt="image"
            sx={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#fff" }}
            >
              {props.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
