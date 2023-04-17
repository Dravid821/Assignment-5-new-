import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Hidden } from "@mui/material";
const ActiveUser = () => {
  let signupdata = JSON.parse(localStorage.getItem("signUpData"));
  let ActiveUser =
    signupdata && signupdata.filter((user) => user.isActive === true);
  return ActiveUser;
};
export default function UserProfileEdit() {
  const [item] = useState(ActiveUser());
  console.log(item);
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
          User Profile
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src="../asset/dravid.jpg"></Avatar>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="first_name">
          <FormLabel>First Name</FormLabel>
          <Input className="text-black" value={item[0].first_name} disabled />
        </FormControl>
        <FormControl id="lastname">
          <FormLabel>Last Name</FormLabel>
          <Input value={item[0].last_name} disabled className="text-black" />
        </FormControl>
        <FormControl id="email">
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            value={item[0].email}
            _placeholder={{ color: "gray.500" }}
            type="email"
            disabled
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Mobile No</FormLabel>
          <Input
            value={item[0].mobile}
            _placeholder={{ color: "gray.500" }}
            disabled
          />
        </FormControl>

        <NavLink to={"/editprofile"}>
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
        <NavLink to={"/product"}>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Home
          </Button>
        </NavLink>
      </Stack>
    </Flex>
  );
}
