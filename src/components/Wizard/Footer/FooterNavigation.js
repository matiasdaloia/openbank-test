import React from "react";
import { Button, Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PropTypes from "prop-types";

export const FooterNavigation = ({ handleReset, formik }) => {
  const { t } = useTranslation();

  return (
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
  );
};

FooterNavigation.propTypes = {
  formik: PropTypes.object.isRequired,
  handleReset: PropTypes.func.isRequired,
};
