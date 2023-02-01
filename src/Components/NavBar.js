import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar(){

    const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
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
               background: "darkblue",
             }}>
                Home
            </NavLink>
            <NavLink
            to="/myprojects"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}>
                My Projects
            </NavLink>
            <NavLink
            to="/addproject"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}>
                Add a project to HTTP
            </NavLink>
        </div>
    )
}

export default NavBar;