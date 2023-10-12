import React from "react";
import { ClansCard, ClanItem } from "./Style";

export const CardClans = ({ clans }) => {
    return (
        <ClansCard>
            {console.log(clans)}
            {clans.map((clan) => (
                <ClanItem key={clan.id}>
                    <h3>{clan.name}</h3>
                </ClanItem>
            ))}
        </ClansCard>
    );
};
