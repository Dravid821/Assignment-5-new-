import * as Yup from "yup";

export const signupSchema = Yup.object({
  first_name: Yup.string().min(2).max(25).required("Please enter your name"),
  last_name: Yup.string().min(2).max(25).required("Please enter your Last name"),
  email: Yup.string().email().required("Please enter your email"),
  mobile:Yup.string().matches(/^[0-9]+$/, 'Mobile number can only contain numeric characters').min(10).max(12).required("Please Enter Your Mobile No"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});