import { useState ,useEffect } from "react"
import { api } from "../../services/api"
import { CardGame } from "../CardGame"
import { HeaderGame } from "../HeaderGame"
import { BoardCard, Container }  from "./style"
import Modal from 'react-modal';

interface Cards {
    id: number;
    name: string;
    img: string;
    matching: boolean;
}

interface Matching {
    id: Number;
    index: Number;
}

interface Players {
    id: number;
    name: string;
    points: number;
    turn: boolean;
}

export function BoardGame(){
    const [cards, setCards] = useState<Cards[]>([])
    const [randomCards, setRandomCards] = useState<Cards[]>([])
    const [selected, setSelected] = useState<Matching[]>([])

    const [players, setPlayers] = useState<Players[]>([])
    const [winner, setWinner] = useState('')

    const [modalIsOpen, setIsOpen] = useState(false);
    
    //get cards
    useEffect(()=>{
        api.get('card-game')
            .then(response => setCards(response.data));        
    },[])

    //get players
    useEffect(()=>{
        api.get('players')
            .then(response => setPlayers(response.data));        
    },[])

    useEffect(()=>{
        if(randomCards.length >= 1){            
            const result = randomCards.find( card => card.matching === false );
            if(!result){
                players.map((item)=> { 
                    if(item.turn === true) {  
                        setWinner(item.name)
                    }    
                  }        
                )
                setTimeout(() => {                   
                    setIsOpen(true);
                }, 1000);
                
            }
        }
    },[randomCards])

    // initialize new game
    function newGame(){

        setIsOpen(false)
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
        
        setPlayers([])
        api.get('players')
        .then(response => setPlayers(response.data));
        setRandomCards(newCards)
    }

    function handleClick(id:Number,index:Number) { 
              
        if(selected.length === 0){                      
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
                    yourTurn(id)
                    setSelected([{ 
                        id:id,
                        index: index
                    }])
                }
            }else {
                console.log('voce ja clicou aqui')
            }            
        }
    }

    function matching(id:Number) {
        
        console.log('nice job')        
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
       setSelected([])
       addPoints()
       
    }

    function addPoints() {
              
        const playerUpdate = players.map((item)=> { 
            if(item.turn === true) {                      
                const update = {
                  ...item,
                  points: item.points + 1,
                }
                return update
            } 
            return item 
            }        
        )
       setPlayers(playerUpdate)
    }

    function yourTurn(id:Number) {
        const select = randomCards.find( card => card.id === id )

        if(!select?.matching){
            const matchingUpdate = players.map((item)=> { 
                if(item.turn === false) {                      
                    const update = {
                      ...item,
                      turn: true,
                    }
                    return update
                } else {
                    const update = {
                        ...item,
                        turn: false,
                      }
                      return update    
                }
              }        
            )
           setPlayers(matchingUpdate)
        }else{
            console.log('carta clicada')
        }
    }
       
    return(
        <>
        
        <Container>
            <Modal
            isOpen={modalIsOpen}         
            className="modal-content"
            overlayClassName="modal-overlay"
            contentLabel="Winner"
            > 
                <h1>{winner}</h1>
                <strong>Winner!!!</strong>
                <img src="/images/winner.png" alt="winner"/>
                <button onClick={newGame}>restart</button>            
            </Modal>
            <HeaderGame players={players}/>
            <BoardCard>          
                {randomCards?.map((card, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleClick(card.id, index)}
                    >                
                        <CardGame name={card.name} img={`images/${card.img}`} matching={card.matching}/>
                    </div>
                ))}                
            </BoardCard>  
            <button onClick={newGame}>New Game</button>
        </Container>
        </>
    )
}