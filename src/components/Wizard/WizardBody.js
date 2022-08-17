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
      backgroundColor: '#25CAA2',
      marginTop: 5,
    },
  },
}));

function renderStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <FeedbackStep />;
    default:
      return <div>Not Found</div>;
  }
}

const WizardBody = ({ activeStep }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.wizardBodyContainer}>
      <Typography variant="h5" className={classes.stepContentTitle}>
        Crea tu password manager
      </Typography>
      {renderStepContent(activeStep)}
    </Container>
  );
};

export default WizardBody;
