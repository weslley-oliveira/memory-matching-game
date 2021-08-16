import styled from "styled-components";

export const Container = styled.header`
    padding-top: 2rem;
    padding-bottom: 2rem;

    .players {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
    }
    .active {
        border: solid 1px var(--player-score);
        padding: 1rem;
        border-radius: 12px;
    }
    p { 
        text-align: center;
        font-size: 10px;
    }
    
    
    
` 