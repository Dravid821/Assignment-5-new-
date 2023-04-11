//Change Password Page All Validation
import * as Yup from "yup";
export const Changepasswordschema = Yup.object({
  current_password: Yup.string()
    .matches()
    .required("Please Enter Your Password"),
  new_password: Yup.string()
    .matches()
    .min(8)
    .required("Please Enter New Password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("new_password"), null], "Password must match"),
});
