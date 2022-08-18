import React from "react";
import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useTranslation } from "react-i18next";

const WizardFooter = ({
  activeStep,
  setActiveStep,
  formik,
  feedbackResult,
}) => {
  const { t } = useTranslation();

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
          <>
            <Grid item>
              <Button
                variant="text"
                color="secondary"
                size="large"
                onClick={handleReset}
              >
                {t("common.cancel")}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                disabled={!formik.values.acceptTermsAndConditions}
                endIcon={<ChevronRightIcon />}
              >
                {t("common.next")}
              </Button>
            </Grid>
          </>
        ) : (
          <Button
            variant="text"
            color="primary"
            onClick={handleReset}
            endIcon={<ChevronRightIcon />}
          >
            {feedbackResult === 200 ? "Acceder" : "Volver al Password Manager"}
          </Button>
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
