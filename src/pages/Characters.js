import React, { useState, useEffect } from "react";
import { CardCharacters } from "../components/CardCharacters/CardCharacters";
import { CharactersContainer } from "./Styles/PagesStyle";
import axios from "axios";
import { BASE_URL_API, collections } from "../constans/urls";

export const Characters = () => {
  const [listCharacters, setListCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); 
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

  const filteredCharacters = listCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <CharactersContainer>
      
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={searchTerm}
        onChange={handleSearch}
      />

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
