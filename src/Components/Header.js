import React from "react";
import "../Services/Reducers/reducer";
import { useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const items = useSelector((state) => state.datareducer.user.products);
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <NavLink style={{ textDecoration: "none" }} >
            <a className="navbar-brand h4 text-white" color="none">
              Shoppy
            </a>
          </NavLink>
          <form className="form-inline">
            <Button>
              <NavLink
                style={{ textDecoration: "none" }}
                className="text-primary"
              >
                
              </NavLink>
              MYCART&nbsp;
              <Badge badgeContent={0} color="primary">
                <BsFillCartCheckFill />
              </Badge>
            </Button>
          </form>

        </div>
      </nav>
    </>
  );
}
