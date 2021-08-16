import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Content } from "./style"

interface ScoreGameProps {
    points : number;
}

interface Cards {
    id: number;
    name: string;
    img: string;
    matching: boolean;
}

export function ScoreGame({ points }: ScoreGameProps) {
    const [cards, setCards] = useState<Cards[]>([])

    useEffect(()=>{
        api.get('card-game')
            .then(response => setCards(response.data));        
    },[])
        
    const fatored = (points/cards.length)*100   

    return ( 
        <Content>
            <div className="score">
                <div style={{width:`${fatored}%`}}></div>
            </div>                    
        </Content>
    )
}