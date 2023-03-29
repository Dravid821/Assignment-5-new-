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
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { EditSchema } from "./schema/editschema";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const ActiveUser = () => {
  let signupdata = JSON.parse(localStorage.getItem("signUpData"));
  let ActiveUser =
    signupdata && signupdata.filter((user) => user.isActive === true);
  return ActiveUser;
};
export default function UserProfileEdit() {

  const [item] = useState(ActiveUser());
  const initialValues = {
    first_name: item[0].first_name,
    last_name: item[0].last_name,
    email: item[0].email,
    mobile: item[0].mobile,
  };
  console.log(item);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: EditSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        console.log("Form-data", values);
        let signupdata = JSON.parse(localStorage.getItem("signUpData"));
        console.log(signupdata);
        signupdata = signupdata.map((item) => {
          if (!item.isActive) {
            toast.error("User Are Not Active");
          } else {
            if (
              item.first_name === values.first_name &&
              item.last_name === values.last_name &&
              item.email === values.email &&
              item.mobile === values.mobile
            ) {
              toast.error("Data same as Privious Data");
            } else {
              item.first_name = values.first_name;
              item.last_name = values.last_name;
              item.email = values.email;
              item.mobile = values.mobile;
              toast.success("Profile Data Update Successfully.");
            }
          }
          return item;
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
            <Stack spacing={6} direction={["column", "row"]}>
              <NavLink>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  w="full"
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Edit
                </Button>
              </NavLink>
              <NavLink to={"/"}>
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
              </NavLink>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}
