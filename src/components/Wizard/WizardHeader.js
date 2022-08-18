import React from "react";
import { makeStyles, Step, StepLabel, Stepper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  stepper: {
    maxWidth: 230,
    minHeight: theme.dimensions.headerHeight,
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
      transition: "all 0.3s",
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
    "& .MuiStep-horizontal": {
      position: "relative",
    },

    "& .activeStep__indicator": {
      width: 0,
      height: 0,
      position: "absolute",
      borderLeft: "20px solid transparent",
      borderRight: "20px solid transparent",
      borderBottom: "20px solid #fff",
      left: "50%",
      transform: "translateX(-50%) translateY(20px)",
    },
  },
}));

const WizardHeader = ({ steps, activeStep }) => {
  const classes = useStyles();

  return (
    <Stepper activeStep={activeStep} className={classes.stepper}>
      {steps.map((step, index) => (
        <Step key={step}>
          <StepLabel classes={{ active: classes.active }}></StepLabel>
          <div
            className="activeStep__indicator"
            style={{ display: activeStep === index ? "block" : "none" }}
          ></div>
        </Step>
      ))}
    </Stepper>
  );
};

export default WizardHeader;
