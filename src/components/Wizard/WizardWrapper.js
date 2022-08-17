import React, { useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

import WizardFooter from "./WizardFooter";
import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import { submitForm } from "../../services/api";
import Spinner from "components/common/Spinner";
import Step1 from "components/steps/Step1";
import Step2 from "components/steps/Step2";
import FeedbackStep from "components/steps/FeedbackStep";

YupPassword(yup);

const useStyles = makeStyles((theme) => ({
  wizardWrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: `calc(100vh - ${
      theme.dimensions.headerHeight + theme.dimensions.headerPadding
    }px)`,
  },
  wizardBodyContainer: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  stepContentTitle: {
    "&::after": {
      content: '""',
      display: "block",
      width: 40,
      height: 2,
      backgroundColor: "#25CAA2",
      marginTop: 5,
    },
  },
}));

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

const WizardWrapper = ({ activeStep, setActiveStep }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [feedbackResult, setFeedbackResult] = useState(null);

  const formik = useFormik({
    initialValues,
    validate: validate[activeStep] && validate[activeStep],
    onSubmit: async (values) => {
      const isLastStep = activeStep === 1;

      if (isLastStep) {
        setLoading(true);
        try {
          const response = await submitForm(values.password);
          setFeedbackResult(response.status);
        } catch (error) {
          setFeedbackResult(error.status);
        } finally {
          setLoading(false);
        }
      }

      setActiveStep((prevStep) => prevStep + 1);
    },
  });

  return (
    <>
      <Spinner open={loading} />
      <Container maxWidth="md">
        <form onSubmit={formik.handleSubmit}>
          <div
            className={classes.wizardWrapper}
            style={{ justifyContent: activeStep !== 2 ? "space-between" : "" }}
          >
            <div className={classes.wizardBodyContainer}>
              {activeStep !== 2 && (
                <Typography
                  variant="h5"
                  color="secondary"
                  className={classes.stepContentTitle}
                >
                  Crea tu password manager
                </Typography>
              )}
              {activeStep === 0 && <Step1 formik={formik} />}
              {activeStep === 1 && <Step2 formik={formik} />}
              {activeStep === 2 && (
                <FeedbackStep feedbackResult={feedbackResult} />
              )}
            </div>
            <WizardFooter
              formik={formik}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              feedbackResult={feedbackResult}
            />
          </div>
        </form>
      </Container>
    </>
  );
};

export default WizardWrapper;
