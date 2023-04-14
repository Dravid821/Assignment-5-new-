//Login Page All Validation
import * as Yup from "yup";
export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().matches().required("Enter Your Password"),
});