import React from "react";
import PropTypes from "prop-types";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.tertiary.main,
  },
}));

const Spinner = ({ open }) => {
  const classes = useStyles();

  return (
    <Backdrop open={open} className={classes.backdrop}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

Spinner.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Spinner;
