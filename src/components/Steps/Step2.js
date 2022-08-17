import React from "react";
import { Grid, makeStyles, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  stepSubtitle: {
    padding: "2rem 0",
  },
  passwordInput: {
    marginRight: "3rem",
  },
  passwordHintRow: {
    padding: "2rem 0 1.5rem 0",
  },
  formHelperText: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0,
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
          type="password"
          label="Crea tu Contraseña Maestra"
          placeholder="Contraseña"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.errors.password}
          error={formik.touched.password && formik.errors.password?.length > 0}
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
          type="password"
          label="Crea tu Contraseña Maestra"
          placeholder="Contraseña"
          variant="outlined"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.errors.repeatPassword}
          error={
            formik.touched.repeatPassword &&
            formik.errors.repeatPassword?.length > 0
          }
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} className={classes.passwordHintRow}>
        <Typography variant="body1" color="secondary">
          También puedes crear una pista que te ayude a recordar tu contraseña
          maestra
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="recoverPasswordHint"
          name="recoverPasswordHint"
          label="Crea tu pista para recordar tu contraseña (opcional)"
          placeholder="Introduce tu pista"
          variant="outlined"
          value={formik.values.recoverPasswordHint}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={
            <>
              <Typography variant="caption" color="error">
                {formik.errors.recoverPasswordHint}
              </Typography>
              <Typography variant="caption">
                {formik.values.recoverPasswordHint.length}/255
              </Typography>
            </>
          }
          fullWidth
          FormHelperTextProps={{
            classes: {
              root: classes.formHelperText,
            },
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Step2;
