import React, { useState, useEffect } from "react";
import { ClansContainer } from "./Styles/PagesStyle";
import axios from "axios";
import { BASE_URL_API, collections } from "../constans/urls";
import { CardClans } from "../components/CardClans/CardClans";

export const Clans = () => {
    const [listClans, setListClans] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL_API}${collections.allClans}`)
      .then((response) => {
        setListClans(response.data.clans);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return (
        <>
        <ClansContainer>
            <CardClans clans={listClans}/>
        </ClansContainer>

        </>
    )
}