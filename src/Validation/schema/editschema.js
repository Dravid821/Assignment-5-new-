//Edit Profile Page All Validation
import * as Yup from "yup";
export const EditSchema = Yup.object({
  first_name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
  last_name: Yup.string().min(2).max(25).required("Please Enter Your Last Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  mobile:Yup.string().matches(/^[0-9]+$/, 'Mobile Number Can Only Contain Numeric Characters').min(10).max(12).required("Please Enter Your Mobile No"),
});