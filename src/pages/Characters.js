import React, { useState, useEffect } from "react";
import { CardCharacters } from "../components/CardCharacters/CardCharacters";
import { CharactersContainer } from "./Styles/PagesStyle";
import axios from "axios";
import { BASE_URL_API, collections } from "../constans/urls";

export const Characters = () => {
  const [listCharacters, setListCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10;

  const reqCharacters = async () => {
    const response = await axios.get(`${BASE_URL_API}${collections.allCharacters}?limit=99999`);
    setListCharacters(response.data.characters);
  };

  useEffect(() => {
    reqCharacters();
  }, []);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = listCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  return (
    <CharactersContainer>
      <CardCharacters characters={currentCharacters} />
      
      <div>
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>Anterior</button>
        )}
        {currentCharacters.length === charactersPerPage && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Próxima</button>
        )}
      </div>
    </CharactersContainer>
  );
};
