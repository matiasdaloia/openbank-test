import React from "react";
import { Grid, makeStyles, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  stepSubtitle: {
    padding: "2rem 0",
  },
  passwordInput: {
    marginRight: "3rem",
  },
}));

const Step2 = ({ formik }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.stepSubtitle}>
        <Typography variant="body1" color="secondary">
          En primer lugar, debes crear una constraseña diferente para sus
          pertenencias electrónicas. No podrás recuperar tu constraseá, así que
          recuérdala bien.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} className={classes.passwordInput}>
        <TextField
          id="password"
          name="password"
          label="Crea tu Contraseña Maestra"
          placeholder="Contraseña"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // helperText="Full width!"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <TextField
          id="repeatPassword"
          name="repeatPassword"
          label="Crea tu Contraseña Maestra"
          placeholder="Contraseña"
          variant="outlined"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // helperText="Full width!"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Step2;
