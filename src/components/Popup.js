import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import useDogs from "../context/Context";

const Popup = () => {
  const { didUpdate, setDidUpdate } = useDogs();
  const handleClose = () => {
    setDidUpdate(false);
  };

  return (
    <Dialog open={didUpdate} keepMounted onClose={handleClose}>
      <DialogTitle>Success!</DialogTitle>
      <DialogContent>
        <DialogContentText>Data Updated.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
