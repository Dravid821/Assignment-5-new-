import React, { useState } from "react";
import "../redux/Reducers/reducer";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
// import {
//   Button,
//   ButtonDropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
// } from "reactstrap";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
export default function Navbar(direction,...args) {
  // const items = useSelector((state) => state.datareducer.user.products);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let loggin = JSON.parse(localStorage.getItem("isLogin"));

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
        <div className="container">
          <NavLink style={{ textDecoration: "none" }}>
            <a className="navbar-brand h4 text-white" color="none">
              Shoppy
            </a>
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
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  direction={direction}
                  className=''
                 
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
                    <NavLink to={"/product"}>
                      <DropdownItem>Product</DropdownItem>
                    </NavLink>
                    <hr/>
                    <NavLink to={"/profile"}>
                      <DropdownItem>Profile</DropdownItem>
                    </NavLink>
                    <NavLink to={"/editprofile"}>
                      <DropdownItem>Edit Profile</DropdownItem>
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
// Navbar.propTypes = {
//   direction: PropTypes.string,
// };
