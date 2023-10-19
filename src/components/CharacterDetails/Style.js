import styled from "styled-components";

export const CharacterDetail = styled.div`
    width: 80vw;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & div {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    & span{
        display: flex;
        
    }
    & img {
        width: 300px;
        height: 230px;
    } 
    & h3 {
        font-size: 25px;
        color: Black;
        font-weight: bold;
    }
    & label {
        font-size: 16px;
        color: black;
        font-weight: bold;
    }
    
`