import React, { useState, useEffect } from "react";
import { CardKekkeiGenkais } from "../components/CardKekkeiGenkai/CardKekkeiGenkai";
import { KekkeiGenkaisContainer } from "./Styles/PagesStyle";
import axios from "axios";
import { BASE_URL_API, collections } from "../constans/urls";

export const KekkeiGenkais = () => {
  const [listKekkeiGenkais, setListKekkeiGenkais] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL_API}${collections.allKekkeiGenkai}`)
      .then((response) => {
        setListKekkeiGenkais(response.data['kekkei-genkai']);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <KekkeiGenkaisContainer>
      <CardKekkeiGenkais kekkeiGenkais={listKekkeiGenkais} />
    </KekkeiGenkaisContainer>
  );
};