import { PlayerName } from "../PlayerName";
import { ScoreGame } from "../ScoreGame";
import { Container } from "./style";

export function HeaderGame(){
    return(
        <Container>
            <div className="players">
                <div className={`active`}>
                    <PlayerName>
                        Player 1 
                    </PlayerName>
                    <ScoreGame points={3}/>
                </div>                
                <p>vs</p>
                <div>
                    <PlayerName> 
                        Player 2
                    </PlayerName>
                    <ScoreGame points={2}/>
                </div>                
            </div>
        </Container>    
          
    )
}