import React from "react";
import { KekkeiGenkaisCard, KekkeiGenkaiItem } from "./Style";

export const CardKekkeiGenkais = ({ kekkeiGenkais }) => {
    return (
        <KekkeiGenkaisCard>
            {console.log(kekkeiGenkais)}
            {kekkeiGenkais.map((kekkeiGenkai) => (
                <KekkeiGenkaiItem key={kekkeiGenkai.id}>
                    <h3>{kekkeiGenkai.name}</h3>
                </KekkeiGenkaiItem>
            ))}
        </KekkeiGenkaisCard>
    );
};
