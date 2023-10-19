import React, { useState, useEffect } from "react";
import { AkatsukiContainer } from "./Styles/PagesStyle";
import axios from "axios";
import { BASE_URL_API, collections } from "../constans/urls";
import { CardAkatsuki } from "../components/CardAkatsuki/CardAkatsuki";
import { InputFilter, LabelFilter } from "./Styles/PagesStyle";

export const Akatsuki = () => {
  const [listAkatsuki, setListAkatsuki] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const charactersPerPage = 10;

  const reqCharacters = async () => {
    const response = await axios.get(
      `${BASE_URL_API}${collections.allAkatsuki}?limit=99999`
    );
    setListAkatsuki(response.data.akatsuki);
  };

  useEffect(() => {
    reqCharacters();
  }, []);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;

  const filteredCharacters = listAkatsuki.filter((character) =>
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
    <>
      <AkatsukiContainer>
        <div>
          <LabelFilter>Pesquisar Pelo Nome:</LabelFilter>
          <InputFilter
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <CardAkatsuki listakatsuki={listAkatsuki} />
        <div>
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Anterior
            </button>
          )}
          {currentCharacters.length === charactersPerPage && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Próxima
            </button>
          )}
        </div>
      </AkatsukiContainer>
    </>
  );
};
