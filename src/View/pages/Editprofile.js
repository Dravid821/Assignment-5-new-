import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { EditSchema } from "../../Validation/schema/editschema";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const ActiveUser = () => {
  let signupdata = JSON.parse(localStorage.getItem("signUpData"));
  let ActiveUser =
    signupdata && signupdata.filter((user) => user.isActive === true);
  return ActiveUser;
};
let signupdata = JSON.parse(localStorage.getItem("signUpData"));
console.log(signupdata);
export default function UserProfileEdit() {
  const [item] = useState(ActiveUser());
  const navigate = useNavigate();
  console.log("item 0", item);
  const initialValues = {
    first_name: item[0].first_name,
    last_name: item[0].last_name,
    email: item[0].email,
    mobile: item[0].mobile,
  };
  let loggin = JSON.parse(localStorage.getItem("isLogin"));
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, } =
    useFormik({
      initialValues,
      validationSchema: EditSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        console.log("Form-data", values);
        let signupdata = JSON.parse(localStorage.getItem("signUpData"));
        const activeEmail = signupdata && signupdata.filter((user) => user.isActive === false )
        console.log(signupdata);
        signupdata = signupdata.map((items) => {
          if (!items.isActive) {
            return items;
          } else {
            if (
              activeEmail.some((user)=>user.email === values.email)
            ) {
              toast.error("email Alraddy Exits.");
              return items;
            } else{
                items.first_name = values.first_name;
                items.last_name = values.last_name;
                items.mobile = values.mobile;
                items.email = values.email;
            }
              toast.success("Profile Data Update Successfully.");
              navigate("/profile");
              //localStorage.setItem("signUpData", JSON.stringify(items));
          }
          return items;
        });
        // console.log("string",JSON.stringify(values))
        // console.log("object",JSON.parse(values))
        localStorage.setItem("signUpData", JSON.stringify(signupdata));
        action.resetForm();
      },
    });
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          User Profile Edit
        </Heading>
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl id="first_name" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="first_name"
                autoComplete="off"
                name="first_name"
                id="first_name"
                placeholder="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.first_name && touched.first_name ? (
                <p className="form-error">{errors.first_name}</p>
              ) : null}
            </FormControl>
            <FormControl id="last_name" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="last_name"
                autoComplete="off"
                name="last_name"
                id="last_name"
                placeholder="last_name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.last_name && touched.last_name ? (
                <p className="form-error">{errors.last_name}</p>
              ) : null}
            </FormControl>
            <FormControl id="email" isRequired>
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
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile No</FormLabel>
              <Input
                type="mobile"
                autoComplete="off"
                name="mobile"
                id="mobile"
                placeholder="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mobile && touched.mobile ? (
                <p className="form-error">{errors.mobile}</p>
              ) : null}
            </FormControl>
            <Stack spacing={6} direction={["column", "row"]} pt={5}>
              <NavLink to={`/profile`}>
              <Button
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}
              >
                Cancel
              </Button>
              </NavLink>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "blue.500",
                }}
              >
                submit
              </Button>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
 }