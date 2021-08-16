import { PlayerName } from "../PlayerName";
import { ScoreGame } from "../ScoreGame";
import { Container } from "./style";

interface Players {
    id: number;
    name: string;
    points: number;
    turn: boolean;
}

interface HeraderGameProps {
    players: Players[]
}

export function HeaderGame({ players }: HeraderGameProps){
    console.log(players)
    return(
        <Container>
            <p>vs</p>
            <div className="players">
                 {players.map(player => (
                    <div key={player.id} className={`${player.turn && 'active'}`}>
                        <PlayerName>
                           {player.name}
                        </PlayerName>
                        <ScoreGame points={player.points}/>
                    </div> 
                ))}
            </div>
        </Container>    
          
    )
}