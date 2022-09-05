import React from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { OutlinedTextField } from "components/theme/forms/OutlinedTextField";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  passwordInput: {
    [theme.breakpoints.up("md")]: {
      marginRight: "3rem",
    },
  },
}));

export const PasswordInput = ({
  formik,
  isVisible,
  handleToggleVisibility,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid item xs={12} md={5} className={classes.passwordInput}>
      <OutlinedTextField
        id="password"
        name="password"
        type={isVisible ? "text" : "password"}
        label={t("password.label")}
        placeholder={t("password.placeholder")}
        color="secondary"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={t(formik.errors.password)}
        error={formik.touched.password && formik.errors.password?.length > 0}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleToggleVisibility("password")}
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

PasswordInput.propTypes = {
  formik: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  handleToggleVisibility: PropTypes.func.isRequired,
};
