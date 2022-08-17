import React from "react";
import { makeStyles, Step, StepLabel, Stepper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  stepper: {
    maxWidth: 230,
    margin: "0 auto",
    backgroundColor: "#abb6c1",
    "& .MuiStepIcon-root": {
      color: theme.palette.secondary.main,
      opacity: 0.3,
      "&.MuiStepIcon-active, &.MuiStepIcon-completed": {
        opacity: 1,
      },
      "&.MuiStepIcon-completed": {
        color: theme.palette.primary.main,
      },
    },
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      transform: "scale(1.5)",
      color: theme.palette.secondary.main,
    },
    "& .MuiStepConnector-line": {
      borderTopWidth: 3,
      borderColor: theme.palette.secondary.main,
      opacity: 0.3,
    },
    "& .MuiStepConnector-active, & .MuiStepConnector-completed": {
      "& .MuiStepConnector-line": {
        borderColor: theme.palette.primary.main,
        opacity: 1,
      },
    },
    "& .MuiStepLabel-iconContainer, & .MuiStep-horizontal": {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
}));

const WizardHeader = ({ steps, activeStep }) => {
  const classes = useStyles();

  return (
    <Stepper activeStep={activeStep} className={classes.stepper}>
      {steps.map((step) => (
        <Step key={step}>
          <StepLabel></StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default WizardHeader;
