import React, { useState, useEffect } from "react";
import { CardCharacters } from "../components/CardCharacters/CardCharacters";
import { CharactersContainer } from "./Styles/PagesStyle";
import axios from "axios";
import { BASE_URL_API, collections } from "../constans/urls";
import { InputFilter, LabelFilter, ButtonPagination } from "./Styles/PagesStyle";

export const Characters = () => {
  const [listCharacters, setListCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const charactersPerPage = 10;

  const reqCharacters = async () => {
    const response = await axios.get(
      `${BASE_URL_API}${collections.allCharacters}?limit=99999`
    );
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

  const currentCharacters = filteredCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <CharactersContainer>
      <div>
        <LabelFilter>Pesquisar Pelo Nome:</LabelFilter>
        <InputFilter
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <CardCharacters characters={currentCharacters} />

      <div>
        {currentPage > 1 && (
          <ButtonPagination onClick={() => setCurrentPage(currentPage - 1)}>
            Anterior
          </ButtonPagination>
        )}
        {currentCharacters.length === charactersPerPage && (
          <ButtonPagination onClick={() => setCurrentPage(currentPage + 1)}>
            Próxima
          </ButtonPagination>
        )}
      </div>
    </CharactersContainer>
  );
};
