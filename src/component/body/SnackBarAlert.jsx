import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackBarAlert = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = (msg) => {
    setMessage(msg); // Set the message dynamically
    setOpen(true); // Open the Snackbar
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false); // Close the Snackbar
  };

  // Expose the `handleClick` function to the parent
  useImperativeHandle(ref, () => ({
    showMessage: handleClick,
  }));

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{
          bgcolor: "black",
          color: "white",
          "& .MuiAlert-icon": { color: "red" },
          border: "2px solid white",
          borderRadius: "10px",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
});

export default SnackBarAlert;
