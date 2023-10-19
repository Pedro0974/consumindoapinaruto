import React from "react";
import logo from "../../_assets/naruto-logo.png";
import {NavBarContainer, Logo} from './Style'

export const NavBar = () => {
  
  return (
    <NavBarContainer>
      <Logo src={logo} alt="Logo Naruto" />
    </NavBarContainer>
  );
};
