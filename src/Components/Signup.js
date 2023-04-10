import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { signupSchema } from "../Auth/schema/signupschema";
import { NavLink } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import Cardmap from "../view/Cardmap";
import { useNavigate } from "react-router-dom";
import { DecryptData, EncryptData } from "../utils/Encry-Decry";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
//   import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);

  let loggin = JSON.parse(localStorage.getItem("isLogin"));
  const navigate = useNavigate();
  // const toast = useToast()
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
    isActive: false,
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        console.log("Form-data", values);
        values.password = EncryptData(values.password);
        values.confirm_password = EncryptData(values.confirm_password);
        values.isActive = false;
        let signupdata = JSON.parse(localStorage.getItem("signUpData"));
        let temp = [];
        if (signupdata !== null) {
          let filter = signupdata.filter((item) => item.email === values.email);
          if (filter[0]) {
            toast.error("User is Alraddy Exits");
            action.resetForm();
          } else {
            const olddata = [...signupdata];
            temp = [...olddata, values];
            localStorage.setItem("signUpData", JSON.stringify(temp));
            toast.success("Account Created Successfully");
            navigate('/login')
          }
        } else {
          temp.push(values);
          localStorage.setItem("signUpData", JSON.stringify(temp));
          toast.success("Account Created Successfully");
        }
        // console.log("string",JSON.stringify(values))
        // console.log("object",JSON.parse(values))
        action.resetForm();
      },
    });
  console.log(errors);
  if (!loggin) {
    return (
      <Flex
        H={"100vh"}
        minW={"100vw"}
        align={"cnter"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up Form
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}></Text>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Box
              rounded={"lg"}
              // bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
              w={[300,400, 500]}
             
            >
              <Stack spacing={3}>
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
                      <p className="text-danger">{errors.first_name}</p>
                    ) : null}
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" >
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
                      <p className="">{errors.last_name}</p>
                    ) : null}
                  </FormControl>
                </Box>
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
                    <p className="text-danger">{errors.email}</p>
                  ) : null}
                </FormControl>
                <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile No.</FormLabel>
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
                    <p className="text-danger">{errors.mobile}</p>
                  ) : null}
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
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
                  {errors.password && touched.password ? (
                    <p className="text-danger">{errors.password}</p>
                  ) : null}{" "}
                </FormControl>
                <FormControl id="confirm_password" isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showcPassword ? "text" : "password"}
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
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
                <Stack spacing={10} pt={2}>
                  <Button
                    id="submit"
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <NavLink to={`/login`} color={"blue.400"}>
                      Login
                    </NavLink>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
    );
  } else {
    return <Cardmap />;
  }
}
