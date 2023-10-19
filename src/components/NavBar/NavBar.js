import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  goToCharactersPage,
  goToAkatsukiPages,
} from "../../routes/Coordinator";
import { NavBarContainer, Logo, Navigations, Links } from "./Style";
import logo from "../../_assets/naruto-logo.png";

export const NavBar = () => {
  const navigate = useNavigate();
  const pagesLinks = {
    characters: {link: 'characters', name: 'Characters'},
    akatsuki: {link: 'akatsuki', name: 'Akatsuki'},
  }

  const navigateLink = (linkName) => {
    switch (linkName) {
      case 'characters':
        goToCharactersPage(navigate);
        break;
      case 'akatsuki':
        goToAkatsukiPages(navigate);
        break;
      default:
        goToCharactersPage(navigate);
    }
  };
  
  

  return (
    <NavBarContainer>
      <Logo src={logo} alt="Logo Naruto" />

      <Navigations>
        {Object.values(pagesLinks).map(link => (
            <Links key={link.link} onClick={() => navigateLink(link.link)}>{link.name}</Links>
        ))}
      </Navigations>

    </NavBarContainer>
  );
};
