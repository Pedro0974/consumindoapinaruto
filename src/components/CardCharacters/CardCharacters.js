import React, { useState, useEffect } from "react";
import { CharacterDetailComponente } from "../CharacterDetails/CharacterDetail";
import { CharactersCard, CharacterItem } from "./Style";
import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; 
`;

export const CharacterDetailModal = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative; 
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const CardCharacters = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <CharactersCard>
      {characters.map((character) => (
        <div key={character.id}>
          <CharacterItem onClick={() => handleCharacterClick(character)}>
            <h3>{character.name}</h3>
            <img src={character.images[0]} alt={character.name} />
          </CharacterItem>

          {selectedCharacter === character && (
            <ModalBackground>
              <CharacterDetailModal>
                <CloseButton onClick={handleCloseModal}>x</CloseButton>
                <CharacterDetailComponente character={selectedCharacter} />
              </CharacterDetailModal>
            </ModalBackground>
          )}
        </div>
      ))}
    </CharactersCard>
  );
};
