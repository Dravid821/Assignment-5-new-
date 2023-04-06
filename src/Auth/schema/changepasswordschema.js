import * as Yup from "yup";
export const Changepasswordschema = Yup.object({
  current_password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .min(6)
    .required("Please Enter Your Password"),
  new_password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .min(6)
    .required("Please Enter New Password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("new_password"), null], "Password must match"),
});
