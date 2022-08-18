import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const acceptTermsValidationSchema = yup.boolean().required();
const passwordValidationSchema = yup
  .string()
  .password()
  .required("common.errors.required")
  .minSymbols(0)
  .minLowercase(0)
  .min(8, "password.errors.minLength")
  .max(24, "password.errors.maxLength")
  .minNumbers(1, "password.errors.minNumbers")
  .minUppercase(1, "password.errors.uppercase");

const recoverPasswordHintValidationSchema = yup
  .string()
  .max(255, "recoverPasswordHint.errors.maxLength");

export const validateSteps = {
  0: async (values) => {
    const errors = {};

    try {
      await acceptTermsValidationSchema.validate(
        values.acceptTermsAndConditions
      );
    } catch (err) {
      errors.acceptTermsAndConditions = err.errors;
    }

    return errors;
  },
  1: async (values) => {
    const errors = {};

    try {
      await passwordValidationSchema.validate(values.password);
    } catch (error) {
      errors.password = error.errors;
    }

    if (values.password !== values.repeatPassword) {
      errors.repeatPassword = "repeatPassword.errors.mustMatch";
    }

    try {
      await recoverPasswordHintValidationSchema.validate(
        values.recoverPasswordHint
      );
    } catch (err) {
      errors.recoverPasswordHint = err.errors;
    }

    return errors;
  },
};
