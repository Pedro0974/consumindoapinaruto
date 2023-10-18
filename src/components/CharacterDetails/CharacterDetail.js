import React from "react";
import { CharacterDetail } from "./Style";

export const CharacterDetailComponente = ({ character }) => {
  return (
    <>
      <CharacterDetail key={character.id}>
        <h3>{character.name}</h3>
        <img src={character.images[0]} alt={character.name} />
      </CharacterDetail>
    </>
  );
};
