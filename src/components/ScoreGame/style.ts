import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    padding-top: 5px;

    .score {
        width: 100%;
        height: 25px;
        border: solid 2px var(--font-color);
        div {
            height: 100%;
            background-color: var(--player-score);       
        }
    }

`