import { useState } from "react"
import { useEffect } from "react"
import { api } from "../../services/api"
import { CardGame } from "../CardGame"
import { HeaderGame } from "../HeaderGame"
import  { BoardCard, Container }  from "./style"

interface Cards {
    id: number;
    name: string;
    img: string;
}

export function BoardGame(){
    const [cards, setCards] = useState<Cards[]>([])

    useEffect(()=>{
        api.get('card-game')
            .then(response => setCards(response.data))
    },[])

    console.log("cartas", cards)
    return(
        <Container>
            <HeaderGame/>
            <BoardCard>          
                {cards?.map(card => (
                    <div key={card.id}>                        
                        <CardGame name={card.name} img={`images/${card.img}`}/>
                    </div>
                ))}                
            </BoardCard>  
        </Container>
    )
}