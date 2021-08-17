import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

	html {
		background-color: var(--background);
		font-family: 'Press Start 2P', cursive;
		color: white;
	}
		
	.modal-overlay{
		background: rgba(0, 0, 0, 0.8);
        
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;  
		
	}

	.modal-content{
		display: flex;
		flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 300px;
        height: 300px;
        color: var(--font-color);
        background-color: var(--board-game);
		border: solid 4px var(--font-color);
		border-radius: 12px;
		text-align: center;

		strong{
			font-size: 1.75rem;
			color: var(--player-score);
		}

		button {
			width: 250px;
			height: 60px;

			font-size: 1rem;
			font-family: 'Press Start 2P', cursive;

			color: var(--font-color);
			background-color: var(--card-front);
			border: solid 4px var(--font-color);
			border-radius: 12px;
		}
    }

	

	
	
`