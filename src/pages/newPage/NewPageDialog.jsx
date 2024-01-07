import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  Paper,
  TextField,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import strings from "../../helper/hebrew-translation";
import "./newPage.css";

export default function NewPageDialog({
  lable,
  fieldName,
  type,
  onChange,
  errors,
}) {
  const [open, setOpen] = React.useState(false);

  const [localErrors, setLocalErrors] = useState(errors[fieldName] || "");
  useEffect(() => {
    setLocalErrors(errors[fieldName] || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>scroll=paper</Button>

      <Dialog open={open} onClose={handleClose} scroll="paper">
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
