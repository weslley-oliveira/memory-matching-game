import { useState ,useEffect } from "react"
import { api } from "../../services/api"
import { CardGame } from "../CardGame"
import { HeaderGame } from "../HeaderGame"
import { BoardCard, Container }  from "./style"

interface Cards {
    id: number;
    name: string;
    img: string;
    matching: boolean;
}

export function BoardGame(){
    const [cards, setCards] = useState<Cards[]>([])
    const [randomCards, setRandomCards] = useState<Cards[]>([])
    const [selected, setSelected] = useState(0)
    const [matching, setMatching] = useState(false)

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

    function handleClick(id:number) {
        console.log('pegou?', id)
        if(matching){
            setMatching(false)
        }
        if(selected === 0){
            setSelected(id)
        } else {
            if(selected === id) {


                const matchingUpdate = randomCards.map((item)=> { 
                    if(item.id === id) {
                      
                        const update = {
                          ...item,
                          matching: true,
                        }
                        return update
                      
                      
                    }
                    return item 
                  }        
                )
                
               console.log('voce acertou', matchingUpdate)
               setRandomCards(matchingUpdate)
            } else {
                setSelected(id)
                console.log('novo id', selected)
            }
        }

    }
       
    return(
        <Container>
            <HeaderGame/>
            <BoardCard>          
                {randomCards?.map((card, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleClick(card.id)}
                        className={`${card.matching && 'clicado'}`}
                    >                
                        <CardGame name={card.name} img={`images/${card.img}`} matching={card.matching}/>
                    </div>
                ))}                
            </BoardCard>  
            <button onClick={newGame}>New Game</button>
        </Container>
    )
}