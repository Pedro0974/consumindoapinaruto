import styled from 'styled-components';
import { colors } from '../../constans/colors';

export const CharactersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    padding: 0px 20px;
`;

export const InputFilter = styled.input`
    margin-top: 20px;
    padding: 5px;
    border-radius: 4px;
    font-size: 15px;
    border: solid 1px black;
    width: 300px;
`

export const LabelFilter = styled.label`
    color: black;
    margin-right: 5px;
    font-size: 18px;
    margin-bottom: 20px;
`

export const ButtonPagination = styled.button`
    color: white;
    margin: 30px 20px;
    padding: 4 2 4 2 ;
    background-color: ${colors.darkSlateGray};
`