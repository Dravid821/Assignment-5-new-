// Signup  Page All VAlidation
import * as Yup from "yup";
export const signupSchema = Yup.object({
  first_name: Yup.string(``).min(2).max(25).required("First Name is Require"),
  last_name: Yup.string(),
  email: Yup.string().email('Invalid Email Address').required('Email is Require'),
  mobile:Yup.string().matches(/^[0-9]+$/, 'Mobile number can only contain numeric characters').min(10).max(12).required("Mobile is Require"),
  password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number And One Special Case Character').required("Password is Require"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password Must Match"),
});