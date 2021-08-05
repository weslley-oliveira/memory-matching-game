import { useState } from "react"
import { Content } from "./style"

interface ScoreGameProps {
    points : number;
}

export function ScoreGame({ points }: ScoreGameProps) {
    return ( 
        <Content>
            <div className={`${points >= 1 && 'active'}`}></div>
            <div className={`${points >= 2 && 'active'}`}></div>
            <div className={`${points >= 3 && 'active'}`}></div>        
        </Content>
    )
}