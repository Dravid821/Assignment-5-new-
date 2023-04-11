import * as Yup from "yup";

export const signupSchema = Yup.object({
  first_name: Yup.string().min(2).max(25).required("first Name is Required"),
  last_name: Yup.string(),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  mobile:Yup.string().matches(/^[0-9]+$/, 'Mobile number can only contain numeric characters').min(10).max(12).required("Mobile is Require"),
  password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character').required("Password are Require"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});