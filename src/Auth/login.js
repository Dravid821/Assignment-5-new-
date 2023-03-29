import React, { useState } from "react";
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
import { loginSchema } from "./schema/loginschema";
import { useNavigate } from "react-router-dom";
import Cardmap from "../Components/Cardmap";
import { NavLink } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};
export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  let loggin = JSON.parse(localStorage.getItem("isLogin"));
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        console.log("Form-data", values);
        values.isActive = "false";
        let signupdata = JSON.parse(localStorage.getItem("signUpData"));
      console.log(signupdata)
        if (signupdata !== null) {
          let filter = signupdata.filter((item) => item.email === values.email);
          console.log()
          if (filter[0].password === values.password) {
            filter[0].isActive = true;
            localStorage.setItem("isLogin",true)
            navigate("/cardmap")
            toast.success("Login Successfully")
          } else {
            toast.error("Invalid Data Entered.");
            action.resetForm();
          }
        } else {
          toast.error("You need To Register First");
          navigate("/signup")
          action.resetForm();
        }
        // console.log("string",JSON.stringify(values))
        // console.log("object",JSON.parse(values))
        localStorage.setItem("signUpData", JSON.stringify(signupdata));
        action.resetForm();
      },
    });
    if(!loggin){
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
        <Box
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                name="password"
                id="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}{" "}
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <NavLink to={"/changepass"} color={"blue.400"}>Forgot password?</NavLink>
              </Stack>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
        </form>
      </Stack>
    </Flex>
  );
} else {
  return <Cardmap/>
}
}
