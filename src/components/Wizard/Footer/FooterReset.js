import React from "react";
import { Button } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PropTypes from "prop-types";

export const FooterReset = ({ feedbackResult, handleReset }) => {
  return (
    <Button
      variant="text"
      color="primary"
      onClick={handleReset}
      endIcon={<ChevronRightIcon />}
    >
      {feedbackResult === 200 ? "Acceder" : "Volver al Password Manager"}
    </Button>
  );
};

FooterReset.propTypes = {
  feedbackResult: PropTypes.number.isRequired,
  handleReset: PropTypes.func.isRequired,
};
