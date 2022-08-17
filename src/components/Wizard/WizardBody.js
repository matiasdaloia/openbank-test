import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles";
import Step1 from "components/Steps/Step1";
import Step2 from "components/Steps/Step2";
import FeedbackStep from "components/Steps/FeedbackStep";

const useStyles = makeStyles((theme) => ({
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

const WizardBody = ({ activeStep, formik }) => {
  const classes = useStyles();
  console.log(formik);
  return (
    <Container maxWidth="md" className={classes.wizardBodyContainer}>
      <Typography variant="h5" className={classes.stepContentTitle}>
        Crea tu password manager
      </Typography>
      {activeStep === 0 && <Step1 formik={formik} />}
      {activeStep === 1 && <Step2 formik={formik} />}
      {activeStep === 2 && <FeedbackStep formik={formik} />}
    </Container>
  );
};

export default WizardBody;
