import React from "react";
import { VillagesCard, VillageItem } from "./Style";

export const CardVillages = ({ villages }) => {
    return (
        <VillagesCard>
            {console.log(villages)}
            {villages.map((vallage) => (
                <VillageItem key={vallage.id}>
                    <h3>{vallage.name}</h3>
                </VillageItem>
            ))}
        </VillagesCard>
    );
};
