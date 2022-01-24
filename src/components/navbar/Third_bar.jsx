import React, { useState } from "react";
import { NavBarWrapper } from "./NavBar.Styled";
import { FaEnvelope, FaPhone, FaAngleDown } from "react-icons/fa";
import Container from "@material-ui/core/Container";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const Third_Bar = () => {
        const [firstMenu, setFirstMenu] = useState(null);
  return (<NavBarWrapper>

<div className="menu">
        <Container maxWidth="lg" className="menu-container">
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Home
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={firstMenu}
              keepMounted
              open={Boolean(firstMenu)}
              onClose={() => setFirstMenu(null)}
            >
              <MenuItem
                onClick={() => {
                  setFirstMenu(null);
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setFirstMenu(null);
                }}
              >
                My account
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setFirstMenu(null);
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              About us
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Administration
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Academics
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Student&apos;s Zone
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Notice
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Library
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Distance Education
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Contact Us
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
        </Container>
      </div>

  </NavBarWrapper>);
};

export default Third_Bar;
