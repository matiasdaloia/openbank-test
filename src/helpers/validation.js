import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const acceptTermsValidationSchema = yup.boolean().required();
const passwordValidationSchema = yup
  .string()
  .password()
  .required()
  .min(8)
  .max(24)
  .minNumbers(1)
  .minUppercase(1);

const recoverPasswordHintValidationSchema = yup.string().max(255);

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
      errors.repeatPassword = "Las contraseñas deben coincidir";
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
