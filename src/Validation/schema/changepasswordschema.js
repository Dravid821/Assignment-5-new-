//Change Password Page All Validation
import * as Yup from "yup";
export const Changepasswordschema = Yup.object({
  current_password: Yup.string()
    .matches()
    .required("Please Enter Your Password"),
  new_password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Please Enter New Password"),
  confirm_password: Yup.string()
    .required("Confirm Password Is Require")
    .oneOf([Yup.ref("new_password"), null], "Password Must Match"),
});
