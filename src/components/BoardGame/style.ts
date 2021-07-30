import styled from 'styled-components'

export const Container = styled.div`
    background: var(--board-game);
    width: 375px;  

    border: solid 4px var(--font-color);
    
`

export const BoardCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px;
`