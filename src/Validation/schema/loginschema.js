//Login Page All Validation
import * as Yup from "yup";
export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().matches().required("Enter Password"),
});