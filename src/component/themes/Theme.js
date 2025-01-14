import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color
    },
    secondary: {
      main: "#9c27b0", // Purple color
    },
    background: {
      default: "#f5f5f5", // Fallback background color
      paper: "#ffffff", // White paper background
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h5: {
      fontWeight: 600,
    },
  },
});

export default theme;
