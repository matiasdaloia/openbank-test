import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { PasswordInput } from "./Password/PasswordInput";
import { RecoverPasswordInput } from "./Password/RecoverPasswordInput";
import { PasswordHintInput } from "./Password/PasswordHintInput";

const useStyles = makeStyles((theme) => ({
  stepSubtitle: {
    padding: "2rem 0 1rem 0",
  },
  passwordHintRow: {
    padding: "0 0 1.5rem 0",
  },
}));

const Step2 = ({ formik }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [visible, setVisible] = useState({
    password: false,
    repeatPassword: false,
  });

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
      <PasswordInput
        formik={formik}
        isVisible={visible.password}
        handleToggleVisibility={handleToggleVisibility}
      />
      <RecoverPasswordInput
        formik={formik}
        isVisible={visible.repeatPassword}
        handleToggleVisibility={handleToggleVisibility}
      />
      <Grid item xs={12} className={classes.passwordHintRow}>
        <Typography variant="body1" color="secondary">
          También puedes crear una pista que te ayude a recordar tu contraseña
          maestra
        </Typography>
      </Grid>
      <PasswordHintInput formik={formik} />
    </Grid>
  );
};

Step2.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default Step2;
