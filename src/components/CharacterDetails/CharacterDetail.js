import React from "react";
import { CharacterDetail } from "./Style";

export const CharacterDetailComponente = ({ character }) => {
  return (
    <>
      <CharacterDetail key={character.id}>
        {console.log(character)}
        <div>
          <img src={character.images[0]} alt={character.name} />
        </div>
        <div>
          <h3>{character.name}</h3>

          <span>
            <div>
            <label>Narutezas:</label>
            {character.natureType.map((type) => (
              <p key={type}>{type}</p>
            ))}
            </div>
          </span>
        </div>
      </CharacterDetail>
    </>
  );
};
