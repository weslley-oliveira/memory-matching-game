import { useState ,useEffect } from "react"
import { api } from "../../services/api"
import { CardGame } from "../CardGame"
import { HeaderGame } from "../HeaderGame"
import { BoardCard, Container }  from "./style"

interface Cards {
    id: number;
    name: string;
    img: string;
}

export function BoardGame(){
    const [cards, setCards] = useState<Cards[]>([])
    const [randomCards, setRandomCards] = useState<Cards[]>([])

    useEffect(()=>{
        api.get('card-game')
            .then(response => setCards(response.data));        
    },[])

          
    function newGame(){

        let newCards = [
            ...cards,
            ...cards,
        ] 
    
        function randomList() {       
            let randomNumber;
            let tmp;
            for (let i = newCards.length; i;) {
                randomNumber = Math.random() * i-- | 0;
                tmp = newCards[randomNumber];
                newCards[randomNumber] = newCards[i];
                newCards[i] = tmp;
            }
            return newCards;
        }

        randomList()
       
        setRandomCards(newCards)
    }
    
    return(
        <Container>
            <HeaderGame/>
            <BoardCard>          
                {randomCards?.map((card, index) => (
                    <div key={index}>                        
                        <CardGame name={card.name} img={`images/${card.img}`}/>
                    </div>
                ))}                
            </BoardCard>  
            <button onClick={newGame}>New Game</button>
        </Container>
    )
}