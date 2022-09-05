import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { FooterNavigation } from "./Footer/FooterNavigation";
import { FooterReset } from "./Footer/FooterReset";

const WizardFooter = ({
  activeStep,
  setActiveStep,
  formik,
  feedbackResult,
}) => {
  const handleReset = () => {
    setActiveStep(0);
    formik.handleReset();
  };

  return (
    <footer style={{ borderTop: `1px solid #E9ECEF`, padding: 20 }}>
      <Grid
        container
        justifyContent={activeStep === 2 ? "flex-end" : "space-between"}
      >
        {activeStep !== 2 ? (
          <FooterNavigation formik={formik} handleReset={handleReset} />
        ) : (
          <FooterReset
            feedbackResult={feedbackResult}
            handleReset={handleReset}
          />
        )}
      </Grid>
    </footer>
  );
};

WizardFooter.propTypes = {
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired,
  feedbackResult: PropTypes.number,
};

export default WizardFooter;
