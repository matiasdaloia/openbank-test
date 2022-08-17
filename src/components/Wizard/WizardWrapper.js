import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import WizardHeader from "./WizardHeader";
import WizardBody from "./WizardBody";
import WizardFooter from "./WizardFooter";

const useStyles = makeStyles((theme) => ({
  wizardBody: {
    backgroundColor: theme.palette.white,
  },
  wizardFooter: {
    backgroundColor: theme.palette.white,
    borderTop: `1px solid #E9ECEF`,
  },
  wizardHeaderContainer: {
    backgroundColor: '#abb6c1'
  }
}));

const steps = ["information", "passwordCreation", "feedback"];

const WizardWrapper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className={classes.wizard}>
      <Paper>
        <Grid container className={classes.wizardContainer}>
          <Grid item xs={12} className={classes.wizardHeaderContainer}>
            <WizardHeader steps={steps} activeStep={activeStep} />
          </Grid>
          <Grid item xs={12} className={classes.wizardBody}>
            <WizardBody activeStep={activeStep} />
          </Grid>
          <Grid item xs={12} className={classes.wizardFooter}>
            <WizardFooter
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default WizardWrapper;
