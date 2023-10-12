import React, { useState, useEffect } from "react";
import { AkatsukiContainer } from "./Styles/PagesStyle";
import axios from "axios";
import { BASE_URL_API, collections } from "../constans/urls";
import { CardAkatsuki } from "../components/CardAkatsuki/CardAkatsuki";

export const Akatsuki = () => {
    const [listAkatsuki, setListAkatsuki] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL_API}${collections.allAkatsuki}`)
      .then((response) => {
        setListAkatsuki(response.data.akatsuki);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return (
        <>
        <AkatsukiContainer>
            <CardAkatsuki listakatsuki={listAkatsuki}/>
        </AkatsukiContainer>

        </>
    )
}