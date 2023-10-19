import styled from 'styled-components';

export const AkatsukiCard = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 16px; 
    width: 100%;
`;

export const AkatsukiItem = styled.div`
    width: 100%; 
    box-sizing: border-box;
    margin: 0;
`;

export const AkatsukiImage = styled.img`
    width: 10rem;
`