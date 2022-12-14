import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container, makeStyles, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { submitForm } from "../../services/api";
import { validateSteps } from "helpers/validation";

import WizardFooter from "./WizardFooter";
import Spinner from "components/Common/Spinner";
import Step1 from "components/Steps/Step1";
import Step2 from "components/Steps/Step2";
import FeedbackStep from "components/Steps/FeedbackStep";
import { useTranslation } from "react-i18next";

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
      width: 50,
      height: 4,
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

const WizardWrapper = ({ activeStep, setActiveStep }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [feedbackResult, setFeedbackResult] = useState(null);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues,
    validate: validateSteps[activeStep] && validateSteps[activeStep],
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
                  {t("translation:content.title")}
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

WizardWrapper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
};

export default WizardWrapper;
