import React from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  outlinedInput: {
    margin: "1.5rem 0",
    "& .MuiInputLabel-formControl": {
      position: "relative",
    },
    "& fieldset": {
      top: 0,
    },
    "& fieldset legend": {
      display: "none",
    },
    "& label": {
      transform: "translate(0, -12px) !important",
      fontWeight: "bold",
      color: theme.palette.secondary.main,
    },
    "& .MuiInputBase-root.Mui-focused": {
      "&::after": {
        content: '""',
        display: "block",
        width: 50,
        height: 2,
        backgroundColor: "orange",
        bottom: 2,
        left: 2,
        position: "absolute",
        borderBottomLeftRadius: 4,
      },
    },
  },
}));

export const OutlinedTextField = (props) => {
  const classes = useStyles();

  return (
    <TextField
      {...props}
      className={classes.outlinedInput}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
