import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { OutlinedTextField } from "components/theme/forms/OutlinedTextField";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InfoIcon from "@material-ui/icons/Info";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  stepSubtitle: {
    padding: "2rem 0 1rem 0",
  },
  passwordInput: {
    [theme.breakpoints.up("md")]: {
      marginRight: "3rem",
    },
  },
  passwordHintRow: {
    padding: "0 0 1.5rem 0",
  },
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

const Step2 = ({ formik }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState({
    password: false,
    repeatPassword: false,
  });
  const { t } = useTranslation();

  const handleToggleVisibility = (type) => {
    setVisible((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.stepSubtitle}>
        <Typography variant="body1" color="secondary">
          {t("step2.title")}
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} className={classes.passwordInput}>
        <OutlinedTextField
          id="password"
          name="password"
          type={visible.password ? "text" : "password"}
          label={t("password.label")}
          placeholder={t("password.placeholder")}
          color="secondary"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={t(formik.errors.password)}
          error={formik.touched.password && formik.errors.password?.length > 0}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleToggleVisibility("password")}
                >
                  {visible.password ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <OutlinedTextField
          id="repeatPassword"
          name="repeatPassword"
          type={visible.repeatPassword ? "text" : "password"}
          label={t("repeatPassword.label")}
          placeholder={t("repeatPassword.placeholder")}
          color="secondary"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={t(formik.errors.repeatPassword)}
          error={
            formik.touched.repeatPassword &&
            formik.errors.repeatPassword?.length > 0
          }
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle repeat password visibility"
                  onClick={() => handleToggleVisibility("repeatPassword")}
                >
                  {visible.repeatPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
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
    </Grid>
  );
};

Step2.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default Step2;
