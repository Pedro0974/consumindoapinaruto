import React, { useState } from "react";
import { AkatsukiCard, AkatsukiItem, AkatsukiImage } from "./Style";
import styled from "styled-components";
import { CharacterDetailComponente } from "../CharacterDetails/CharacterDetail";

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

export const CardAkatsuki = ({ listakatsuki }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <AkatsukiCard>
      {console.log(listakatsuki)}
      {listakatsuki.map((akatsuki) => (
        <div key={akatsuki.id}>
        <AkatsukiItem onClick={() => handleCharacterClick(akatsuki)}>
          <h3>{akatsuki.name}</h3>
          <AkatsukiImage src={akatsuki.images[0]} alt={akatsuki.name} />
        </AkatsukiItem>

        {selectedCharacter === akatsuki && (
            <ModalBackground>
              <CharacterDetailModal>
                <CloseButton onClick={handleCloseModal}>x</CloseButton>
                <CharacterDetailComponente character={selectedCharacter} />
              </CharacterDetailModal>
            </ModalBackground>
          )}
        </div>
      ))}
    </AkatsukiCard>
  );
};
