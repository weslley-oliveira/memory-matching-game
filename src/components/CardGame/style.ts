import styled from "styled-components";

export const CardFront = styled.div`
    width: 130px;
    height: 160px;
    background-color: var(--card-back);

    border: solid 4px var(--font-color);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    
    img {
        width: 90px;
        height: 90px;
        
        filter: brightness(0.8);        
        border-radius: 100%;
    }
`

export const CardBack = styled.div`
    width: 130px;
    height: 160px;
    background-color: var(--card-front);

    border: solid 4px var(--font-color);
    border-radius: 12px;
`