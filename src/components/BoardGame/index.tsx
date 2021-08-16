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

interface Players {
    name: string;
    points: number;
}

interface Matching {
    id: Number;
    index: Number;
}

export function BoardGame(){
    const [cards, setCards] = useState<Cards[]>([])
    const [randomCards, setRandomCards] = useState<Cards[]>([])
    const [selected, setSelected] = useState<Matching[]>([])
    
    //get cards
    useEffect(()=>{
        api.get('card-game')
            .then(response => setCards(response.data));        
    },[])

    // initialize new game
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
       
        setSelected([])
        setRandomCards(newCards)
    }

    function handleClick(id:Number,index:Number) {
        console.log('ID', id)
        console.log('Index', index)

        function isEmptySelected(selected : Object) {
            var name;
            for (name in selected) {
              return false;
            }
            return true;
          }


        if(selected.length === 0){
            console.log('Was Empyt')          
            setSelected([{ 
                id:id,
                index: index
            }])
        } else{
            const matchId = selected.find( ({ id }) => id === id );
            const matchIndex = selected.find( ({ index }) => index === index );
            
            if(matchIndex?.index !== index){
                if(matchId?.id === id){
                    matching(id)
                } else {
                    setSelected([{ 
                        id:id,
                        index: index
                    }])
                }
            }else {
                console.log('voce ja clicou aqui')
            }
            
        }
        
        

        // if(selected === 0){
        //     setSelected(card.id)
        // } else {
        //     if(selected === card.id) { // if(selected === 0){
        //     setSelected(card.id)
        // } else {
        //     if(selected === card.id) {

        //         matching(card.id)
        //     } else {
        //         setSelected(card.id)               
        //     }
        // }
        //     } else {
        //         setSelected(card.id)               
        //     }
        // }
    }

    function matching(id:Number) {
        console.log('deu certo')
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
       setRandomCards(matchingUpdate)
    }
       
    return(
        <Container>
            <HeaderGame/>
            <BoardCard>          
                {randomCards?.map((card, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleClick(card.id, index)}
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