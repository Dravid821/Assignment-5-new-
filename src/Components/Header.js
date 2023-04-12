import React, { useState } from "react";
import "../redux/Reducers/reducer";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
const ActiveUser = () => {
  let signupdata = JSON.parse(localStorage.getItem("signUpData"));
  let ActiveUser =
    signupdata && signupdata.filter((user) => user.isActive === true);
  return ActiveUser;
};
// Navbar
export default function Navbar(direction, ...args) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let loggin = JSON.parse(localStorage.getItem("isLogin"));
  const [item] = useState(ActiveUser());
  const logout = () => {
    localStorage.setItem("isLogin", false);
    let signupdata = JSON.parse(localStorage.getItem("signUpData"));
    signupdata = signupdata.map((item) => {
      item.isActive = false;
      return item;
    });
    localStorage.setItem("signUpData", JSON.stringify(signupdata));
  };
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <NavLink style={{ textDecoration: "none" }}>
            <p className="navbar-brand h4 text-white" color="none">
              Shoppy
            </p>
          </NavLink>
          <div className="pl-2">
            {loggin ? null : (
              <>
                <NavLink to={"/signup"}>
                  <Button outline color="secondary">
                    signup
                  </Button>{" "}
                </NavLink>
                <NavLink to={"/login"}>
                  <Button outline color="secondary">
                    login
                  </Button>{" "}
                </NavLink>
              </>
            )}
            {loggin ? (
              <div className="d-flex btn-dark">
                <span className="text-white pt-2">{item[0].first_name}</span>
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  direction={direction}
                  className=""
                >
                  <DropdownToggle className="btn btn-dark">
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://www.shutterstock.com/image-vector/user-profile-sign-web-icon-600w-255121297.jpg"
                      height={6}
                      width={6}
                    />
                  </DropdownToggle>
                  <DropdownMenu {...args}>
                    <hr />
                    <NavLink to={"/profile"}>
                      <DropdownItem>Profile</DropdownItem>
                    </NavLink>
                    <NavLink to={"/changepass"}>
                      <DropdownItem>Change Password</DropdownItem>
                    </NavLink>
                    <NavLink to={"/"}>
                      <DropdownItem onClick={logout}>Logout</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </Dropdown>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}
