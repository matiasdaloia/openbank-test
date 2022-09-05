import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { OutlinedTextField } from "components/theme/forms/OutlinedTextField";
import InfoIcon from "@material-ui/icons/Info";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  formHelperText: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0,
  },
  formLabel: {
    display: "flex",
    alignItems: "center",
    fontWeight: 700,
    "& svg": {
      marginLeft: "0.5rem",
      color: theme.palette.info.main,
    },
  },
}));

export const PasswordHintInput = ({ formik }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid item xs={12}>
      <OutlinedTextField
        id="recoverPasswordHint"
        name="recoverPasswordHint"
        label={
          <Typography className={classes.formLabel}>
            Crea tu pista para recordar tu contraseña (opcional)
            <InfoIcon style={{ cursor: "pointer" }} />
          </Typography>
        }
        placeholder="Introduce tu pista"
        value={formik.values.recoverPasswordHint}
        color="secondary"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={
          <>
            <Typography variant="caption" color="error">
              {t(formik.errors.recoverPasswordHint)}
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
      />
    </Grid>
  );
};

PasswordHintInput.propTypes = {
  formik: PropTypes.object.isRequired,
};
