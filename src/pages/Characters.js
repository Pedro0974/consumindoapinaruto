import React, { useState, useEffect } from "react";
import { CardCharacters } from "../components/CardCharacters/CardCharacters";
import { CharactersContainer } from "./Styles/PagesStyle";
import axios from "axios";
import { BASE_URL_API, collections } from "../constans/urls";

export const Characters = () => {
  const [listCharacters, setListCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL_API}${collections.allCharacters}`)
      .then((response) => {
        setListCharacters(response.data.characters);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CharactersContainer>
      <CardCharacters characters={listCharacters} />
    </CharactersContainer>
  );
};
