import React from "react";
import { Grid, IconButton, InputAdornment } from "@material-ui/core";
import { OutlinedTextField } from "components/theme/forms/OutlinedTextField";
import { useTranslation } from "react-i18next";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";

export const RecoverPasswordInput = ({
  formik,
  isVisible,
  handleToggleVisibility,
}) => {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} md={5}>
      <OutlinedTextField
        id="repeatPassword"
        name="repeatPassword"
        type={isVisible ? "text" : "password"}
        label={t("repeatPassword.label")}
        placeholder={t("repeatPassword.placeholder")}
        color="secondary"
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={t(formik.errors.repeatPassword)}
        error={
          formik.touched.repeatPassword &&
          formik.errors.repeatPassword?.length > 0
        }
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle repeat password visibility"
                onClick={() => handleToggleVisibility("repeatPassword")}
              >
                {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

RecoverPasswordInput.propTypes = {
  formik: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  handleToggleVisibility: PropTypes.func.isRequired,
};
