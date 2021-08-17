import styled from 'styled-components'

export const Content = styled.div`
        
    display: flex;    
    justify-content: center;
    align-items: center;
    
`

export const Container = styled.div`
    background: var(--board-game);
    width: 800px;
    border: solid 4px var(--font-color); 
    padding-bottom: 40px;

    .board-card{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 40px;
    }
`

