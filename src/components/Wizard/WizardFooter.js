import React from "react";
import { Button, Grid } from "@material-ui/core";

const WizardFooter = ({ activeStep, setActiveStep, formik }) => {
  const isFirstStep = activeStep === 0;

  const handleBack = () => {
    if (isFirstStep) {
      return;
    }

    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <footer style={{ borderTop: `1px solid #E9ECEF`, padding: 20 }}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Button variant="text" color="secondary" onClick={handleBack}>
            Cancelar
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!formik.values.acceptTermsAndConditions}
          >
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </footer>
  );
};

export default WizardFooter;
