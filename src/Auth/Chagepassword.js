import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Changepasswordschema } from "./schema/changepasswordschema";
import { NavLink } from "react-router-dom";
const initialValues = {
  current_password: "",
  new_password: "",
  confirm_password: "",
};
export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Changepasswordschema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        let Npass = values.new_password;
        let Cpass = values.current_password;
        let signupdata = JSON.parse(localStorage.getItem("signUpData"));
        signupdata = signupdata.map((item) => {
            if (!item.isActive) {
              return item;
            } else {
              if (item.password === Cpass) {
                if (Npass === Cpass) {
                  toast.error("Opps it's same try with new!");
                } else {
                  item.password = Npass;
                  localStorage.setItem(
                    "signUpData",
                    JSON.stringify(signupdata)
                  );
                  toast.success("Password Change Successfully");
                }
              } else {
                toast.error("Incorrect Password");
              }
              return item;
            }
          })
        localStorage.setItem("signUpData", JSON.stringify(signupdata));
        console.log("Form-data", values);
        // let signupdata = JSON.parse(localStorage.getItem("signUpData"));
        // console.log(signupdata);
      },
    });
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Change Password</Heading>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Box boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="current_password">
                <FormLabel>current_password</FormLabel>
                <Input
                  type="current_password"
                  autoComplete="off"
                  name="current_password"
                  id="current_password"
                  placeholder="current_password"
                  value={values.current_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.current_password && touched.current_password ? (
                  <p className="form-error">{errors.current_password}</p>
                ) : null}
              </FormControl>
              <FormControl id="new_password">
                <FormLabel>new_password</FormLabel>
                <Input
                  autoComplete="off"
                  name="new_password"
                  id="new_password"
                  placeholder="new_password"
                  value={values.new_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.new_password && touched.new_password ? (
                  <p className="form-error">{errors.new_password}</p>
                ) : null}{" "}
              </FormControl>
              <FormControl id="confirm_password">
                <FormLabel>confirm_password</FormLabel>
                <Input
                  autoComplete="off"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="form-error">{errors.confirm_password}</p>
                ) : null}{" "}
              </FormControl>
              <Stack spacing={10}>
                <Button type="submit" bg={"blue.400"} color={"white"}>
                  <NavLink to={"/login"}>Change Password</NavLink>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}
