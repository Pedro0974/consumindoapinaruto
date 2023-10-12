import styled from "styled-components";
import { colors } from "../../constans/colors";

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.pumpkin};
    padding: 10px 20px;
    box-shadow: 0 2px 2px 2px ${colors.paleGoldenrod};
`;

export const Logo = styled.img`
    max-height: 40px; /* Tamanho máximo para o logotipo */
`;

export const Navigations = styled.div`
    display: flex;
    gap: 20px; /* Espaço entre os itens de navegação */
`;

export const Links = styled.div`
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 22px;
    &:hover {
        color: ${colors.darkSlateGray}
    }
`;