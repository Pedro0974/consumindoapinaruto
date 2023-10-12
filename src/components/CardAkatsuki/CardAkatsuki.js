import React from "react";
import { AkatsukiCard, AkatsukiItem, AkatsukiImage } from "./Style";

export const CardAkatsuki = ({ listakatsuki }) => {
    return (
        <AkatsukiCard>
            {console.log(listakatsuki)}
            {listakatsuki.map((akatsuki) => (
                <AkatsukiItem key={akatsuki.id}>
                    <h3>{akatsuki.name}</h3>
                    <AkatsukiImage src={akatsuki.images[0]} alt={akatsuki.name}/>
                </AkatsukiItem>
            ))}
        </AkatsukiCard>
    );
};
