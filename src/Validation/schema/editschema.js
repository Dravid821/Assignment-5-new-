//Edit Profile Page All Validation
import * as Yup from "yup";
export const EditSchema = Yup.object({
  first_name: Yup.string().min(2,"First Name Must Be At Least 2 Characters").max(25,"First Name Must Be At Most 25 Characters").required("Please Enter Your Name"),
  last_name: Yup.string().required("Please Enter Your Last Name"),
  email: Yup.string().email('Invalid Email Address').required("Please Enter Your Email"),
  mobile:Yup.string().matches(/^[0-9]+$/, 'Mobile Number Can Only Contain Numeric Characters').min(10).max(12).required("Please Enter Your Mobile No"),
});