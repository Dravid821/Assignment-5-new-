import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Changepasswordschema } from "../../Validation/schema/changepasswordschema";
import { NavLink } from "react-router-dom";
import { DecryptData, EncryptData } from "../../utils/Encry-Decry";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// Initial Value Declaration
const initialValues = {
  current_password: "",
  new_password: "",
  confirm_password: "",
};
export default function ResetPasswordForm() {
  const [showcurrPassword, setShowcurrPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Changepasswordschema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        //Password Chacking And Change Password All Condition.
        let signupdata = JSON.parse(localStorage.getItem("signUpData"));
        const activeUser =
          signupdata.find((user) => user.isActive === true) || [];
        console.log("activepass", activeUser);
        signupdata = signupdata.map((item) => {
          if (!item.isActive) {
            return item;
          } else {
            if (DecryptData(activeUser.password) === values.current_password) {
              if (values.current_password === values.new_password) {
                toast.error("Opps it's same try with new!");
              } else {
                toast.success("Password Change Successfully");
                item.isActive= false;
                navigate("/header");
                return {
                  ...item,
                  password: EncryptData(values.new_password),
                };
              }
            } else {
              toast.error("Incorrect Password");
            }
            return item;
          }
        });
        localStorage.setItem("signUpData", JSON.stringify(signupdata));
      },
    });
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Change Password</Heading>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Box boxShadow={"lg"} p={8} w={[300, 400]}>
            <Stack spacing={4}>
              <FormControl id="current_password">
                <FormLabel>current_password</FormLabel>
                <InputGroup>
                <Input
                  type={showcurrPassword ? "text" : "password"}
                  autoComplete="off"
                  name="current_password"
                  id="current_password"
                  placeholder="current_password"
                  value={values.current_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowcurrPassword((showcurrPassword) => !showcurrPassword)
                      }
                    >
                      {showcurrPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                  </InputGroup>
                {errors.current_password && touched.current_password ? (
                  <p className="text-danger">{errors.current_password}</p>
                ) : null}
              </FormControl>
              <FormControl id="new_password">
                <FormLabel>new_password</FormLabel>
                <InputGroup>
                <Input
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  name="new_password"
                  id="new_password"
                  placeholder="new_password"
                  value={values.new_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                  </InputGroup>
                {errors.new_password && touched.new_password ? (
                  <p className="text-danger">{errors.new_password}</p>
                ) : null}{" "}
              </FormControl>
              <FormControl id="confirm_password">
                <FormLabel>confirm_password</FormLabel>
                <InputGroup>
                <Input
                  autoComplete="off"
                  name="confirm_password"
                  id="confirm_password"
                  type={showcPassword ? "text" : "password"}
                  placeholder="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <InputRightElement h={"full"}>
                      <Button
                        variant={"gho"}
                        onClick={() =>
                          setShowcPassword((showcPassword) => !showcPassword)
                        }
                      >
                        {showcPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="text-danger">{errors.confirm_password}</p>
                ) : null}{" "}
              </FormControl>
              <Stack spacing={10} direction={["column", "row"]} pt={3}>
                <NavLink to='/product'>
                  <Button type="submit" bg={"blue.400"} color={"white"} className="bg-danger">
                    Cancel
                  </Button>
                </NavLink>
                <Button type="submit" bg={"blue.400"} color={"white"}>
                  Change Password
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}
