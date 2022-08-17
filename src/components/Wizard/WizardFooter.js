import React from "react";
import { Button, Container, Grid } from "@material-ui/core";

const WizardFooter = ({ activeStep, setActiveStep, formik }) => {
  const isFirstStep = activeStep === 0;

  const handleBack = () => {
    if (isFirstStep) {
      return;
    }

    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Button variant="text" color="secondary" onClick={handleBack}>
            Atrás
          </Button>
        </Grid>
        <Grid item justifyContent="flex-end" alignItems="flex-end">
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
    </Container>
  );
};

export default WizardFooter;
