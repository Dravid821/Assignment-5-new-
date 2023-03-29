import React, { useState } from "react";
import "../Services/Reducers/reducer";
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
export default function Navbar(direction, ...args) {
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
              // <Menu >
              //   {({ isOpen }) => (
              //     <>
              //       <MenuButton
              //         isActive={isOpen}
              //         as={Button}
              //         className="bg-dark"

              //       >
              //         <Avatar
              //           name="Dan Abrahmov"
              //           src="https://bit.ly/dan-abramov"
              //           height={6}
              //           width={6}
              //         />
              //       </MenuButton>
              //       <MenuList className="right">
              //       <NavLink to={"/cardmap"}>
              //           <MenuItem>Product</MenuItem>
              //         </NavLink>
              //         <NavLink to={"/profile"}>
              //           <MenuItem>Profile</MenuItem>
              //         </NavLink>
              //         <NavLink to={"/editprofile"}>
              //           <MenuItem>Edit Profile</MenuItem>
              //         </NavLink>
              //         <NavLink to={"/login"}>
              //           <MenuItem onClick={logout}>Logout</MenuItem>
              //         </NavLink>
              //       </MenuList>
              //     </>
              //   )}
              // </Menu>
              <div className="d-flex btn-dark">
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  direction={direction}
                  className=''
                 
                >
                  <DropdownToggle>
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                      height={6}
                      width={6}
                    />
                  </DropdownToggle>
                  <DropdownMenu {...args}>
                    <NavLink to={"/cardmap"}>
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
                    <NavLink to={"/login"}>
                      <DropdownItem onClick={logout}>Logout</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </Dropdown>
              </div>
            ) : null}
            {/* <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
        </div>
      </nav>
    </>
  );
}
// Navbar.propTypes = {
//   direction: PropTypes.string,
// };
