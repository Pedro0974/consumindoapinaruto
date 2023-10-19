import styled from 'styled-components';
import { colors } from '../../constans/colors';

export const CharactersCard = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 16px; 
    width: 100%;
    margin: 50px 0px;

`;

export const CharacterItem = styled.div`
    width: 100%; 
    box-sizing: border-box;
    margin: 0px;
    text-align: center;
    background-color: ${colors.pumpkin};
    padding: 10px;
    border-radius: 10px;

    & img{
        width: 200px;
        height: 150px;
    }
`;

