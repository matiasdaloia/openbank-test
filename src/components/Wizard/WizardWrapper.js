import React, { useState } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import WizardHeader from "./WizardHeader";
import WizardBody from "./WizardBody";
import WizardFooter from "./WizardFooter";
import { useFormik } from "formik";

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

const WizardWrapper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
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
                steps={steps}
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
