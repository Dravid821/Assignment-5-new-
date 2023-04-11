//Edit Profile Page All Validation
import * as Yup from "yup";
export const EditSchema = Yup.object({
  first_name: Yup.string().min(2).max(25).required("Please enter your name"),
  last_name: Yup.string().min(2).max(25).required("Please enter your Last name"),
  email: Yup.string().email().required("Please enter your email"),
  mobile:Yup.string().matches(/^[0-9]+$/, 'Mobile number can only contain numeric characters').min(10).max(12).required("Please Enter Your Mobile No"),
});