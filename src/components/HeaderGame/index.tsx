import { PlayerName } from "../PlayerName";
import { ScoreGame } from "../ScoreGame";
import { Container } from "./style";

export function HeaderGame(){
    return(
        <Container>
            <PlayerName name={"Player 1"}/>
            <PlayerName name={"Player 2"}/>
            <ScoreGame/>
        </Container>        
    )
}