import React from "react";
import { CharactersCard, CharacterItem } from "./Style";

export const CardCharacters = ({ characters }) => {
    return (
        <CharactersCard>
            {console.log(characters)}
            {characters.filter(items => (items.name !== 'Jiraiya')).map((character) => (
                <CharacterItem key={character.id}>
                    <h3>{character.name}</h3>
                    <img src={character.images[0]} alt={character.name}/>
                </CharacterItem>
            ))}
        </CharactersCard>
    );
};
