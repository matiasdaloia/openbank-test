import React, { useState } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import WizardHeader from "./WizardHeader";
import WizardBody from "./WizardBody";
import WizardFooter from "./WizardFooter";
import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const useStyles = makeStyles((theme) => ({
  wizardBody: {
    backgroundColor: theme.palette.white,
  },
  wizardFooter: {
    backgroundColor: theme.palette.white,
    borderTop: `1px solid #E9ECEF`,
  },
  wizardHeaderContainer: {
    backgroundColor: "#abb6c1",
  },
}));

const steps = ["information", "passwordCreation", "feedback"];

const initialValues = {
  acceptTermsAndConditions: false,
  password: "",
  repeatPassword: "",
  recoverPasswordHint: "",
};

const acceptTermsValidationSchema = yup.boolean().required();
const passwordValidationSchema = yup
  .string()
  .password()
  .required()
  .min(8)
  .max(24)
  .minNumbers(1)
  .minUppercase(1);

const recoverPasswordHintValidationSchema = yup.string().max(255);

const validate = {
  0: async (values) => {
    const errors = {};

    try {
      await acceptTermsValidationSchema.validate(
        values.acceptTermsAndConditions
      );
    } catch (err) {
      errors.acceptTermsAndConditions = err.errors;
    }

    return errors;
  },
  1: async (values) => {
    const errors = {};

    try {
      await passwordValidationSchema.validate(values.password);
    } catch (error) {
      errors.password = error.errors;
    }

    if (values.password !== values.repeatPassword) {
      errors.repeatPassword = "Las contraseñas deben coincidir";
    }

    try {
      await recoverPasswordHintValidationSchema.validate(
        values.recoverPasswordHint
      );
    } catch (err) {
      errors.recoverPasswordHint = err.errors;
    }

    return errors;
  },
};

const WizardWrapper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik({
    initialValues,
    validate: validate[activeStep] && validate[activeStep],
    onSubmit: (values) => {
      const isLastStep = activeStep === steps.length - 1;

      if (isLastStep) {
        return;
      }

      setActiveStep((prevStep) => prevStep + 1);
    },
  });

  return (
    <div className={classes.wizard}>
      <Paper>
        <Grid container className={classes.wizardContainer}>
          <form onSubmit={formik.handleSubmit}>
            <Grid item xs={12} className={classes.wizardHeaderContainer}>
              <WizardHeader steps={steps} activeStep={activeStep} />
            </Grid>
            <Grid item xs={12} className={classes.wizardBody}>
              <WizardBody activeStep={activeStep} formik={formik} />
            </Grid>
            <Grid item xs={12} className={classes.wizardFooter}>
              <WizardFooter
                formik={formik}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </Grid>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

export default WizardWrapper;
