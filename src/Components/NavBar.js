import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar(){

    const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "2px",
        background: "darkolivegreen",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div>
            <NavLink
             to="/"
             exact
             style={linkStyles}
             activeStyle={{
               background: "sienna",
             }}>
                Home
            </NavLink>
            <NavLink
            to="/myprojects"
            exact
            style={linkStyles}
            activeStyle={{
              background: "sienna",
            }}>
                My Projects
            </NavLink>
            <NavLink
            to="/addproject"
            exact
            style={linkStyles}
            activeStyle={{
              background: "sienna",
            }}>
                Add a project to HTTP
            </NavLink>
        </div>
    )
}

export default NavBar;