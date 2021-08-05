import styled from "styled-components";

export const Content = styled.div`
    width: 130px;
    height: 160px;    
    perspective: 1000px;
    cursor: pointer;

    .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    }

    .active{
    transform: rotateY(180deg);
    }    

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border: solid 4px var(--font-color);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flip-card-front {
        background-color: var(--card-back);
        color: black;
        img {
            width: 90px;
            height: 90px;
            
            filter: brightness(0.8);        
            border-radius: 100%;
        }
    }

    .flip-card-back {
        background-color: var(--card-front);
        transform: rotateY(180deg);
    }
`
