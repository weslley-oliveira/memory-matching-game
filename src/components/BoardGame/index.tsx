import { CardGame } from "../CardGame"
import { HeaderGame } from "../HeaderGame"
import  { BoardCard, Container }  from "./style"

export function BoardGame(){
    return(
        <Container>
            <HeaderGame/>
            <BoardCard>          
                <CardGame/>
                <CardGame/>
                <CardGame/>
                <CardGame/>
                <CardGame/>
                <CardGame/>
            </BoardCard>  
        </Container>
    )
}