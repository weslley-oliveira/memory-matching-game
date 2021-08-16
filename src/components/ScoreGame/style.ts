import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    padding-top: 5px;

    div {
        width: 25px;
        height: 25px;
        border: solid 2px var(--font-color);
        border-radius: 100%;        
    }
    .point {
        background-color: var(--player-score);       
    }

`