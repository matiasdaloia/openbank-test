import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const feedbackTitle = {
  200: "¡Tu Password Manager ya esta creado!",
  401: "Ha habido un error",
};

const feedbackSubtitle = {
  200: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut, praesentium ipsum veritatis ad repellendus hic magni suscipit? ",
  401: "No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde",
};

const feedbackIcon = {
  200: <CheckCircleOutlineIcon fontSize="large" style={{ color: "#25CAA2" }} />,
  401: <ErrorOutlineIcon fontSize="large" color="error" />,
};

const FeedbackStep = ({ feedbackResult }) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={2} md={1} style={{ textAlign: "center" }}>
        {feedbackIcon[feedbackResult]}
      </Grid>
      <Grid item xs={9} md={10}>
        <Typography
          variant="h6"
          color="secondary"
          style={{ fontWeight: "bold" }}
          gutterBottom
        >
          {feedbackTitle[feedbackResult]}
        </Typography>
        <Typography
          variant="body2"
          color="secondary"
          style={{ fontWeight: 500 }}
        >
          {feedbackSubtitle[feedbackResult]}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FeedbackStep;
