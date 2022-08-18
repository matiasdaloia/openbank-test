import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Img1 from "../../assets/img/step1_img1.png";
import Img2 from "../../assets/img/step1_img2.png";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  imagesRow: {
    padding: "40px 30px",
  },
  bottomSpacing: {
    marginBottom: "2rem",
  },
  gridItem: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      "&:first-child": {
        marginBottom: "3rem",
      },
    },
    "& img": {
      maxWidth: 150,
    },
  },
  subtitle: {
    marginBottom: "0.4rem",
  },
  termsAndConditionsRow: {
    paddingTop: "3rem",
  },
}));

const Step1 = ({ formik }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Grid
        container
        className={classes.imagesRow}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={5} className={classes.gridItem}>
          <img src={Img1} alt="Guarda aquí tus contraseñas" />
          <Typography variant="body1" color="secondary">
            {t("step1.image1.text")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} className={classes.gridItem}>
          <img src={Img2} alt="Guarda aquí tus contraseñas" />
          <Typography variant="body1" color="secondary">
            {t("step1.image2.text")}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className={classes.bottomSpacing}>
          <Typography
            variant="subtitle1"
            color="secondary"
            className={classes.subtitle}
          >
            {t("step1.howItWorks.title")}
          </Typography>
          <Typography variant="body1">
            {t("step1.howItWorks.textContent")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="secondary"
            className={classes.subtitle}
          >
            {t("step1.whatCanYouSave.title")}
          </Typography>
          <Typography variant="body1">
            {t("step1.whatCanYouSave.textContent")}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.termsAndConditionsRow}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.acceptTermsAndConditions}
                value={formik.values.acceptTermsAndConditions}
                onChange={formik.handleChange}
                name="acceptTermsAndConditions"
              />
            }
            label={
              <Typography variant="body2">
                {t("step1.acceptTermsLabel")}
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

Step1.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default Step1;
