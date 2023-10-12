import React, { useState, useEffect } from "react";
import { CardVillages } from "../components/CardVillages/CardVillages";
import { VillagesContainer } from "./Styles/PagesStyle";
import axios from "axios";
import { BASE_URL_API, collections } from "../constans/urls";

export const Villages = () => {
  const [listVillages, setListVillages] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL_API}${collections.allVillages}`)
      .then((response) => {
        setListVillages(response.data.villages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <VillagesContainer>
      <CardVillages villages={listVillages} />
    </VillagesContainer>
  );
};