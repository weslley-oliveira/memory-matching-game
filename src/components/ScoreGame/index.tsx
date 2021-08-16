import { useState } from "react"
import { Content } from "./style"

interface ScoreGameProps {
    points : number;
}

export function ScoreGame({ points }: ScoreGameProps) {
    return ( 
        <Content>
            <div className={`${points >= 1 && 'point'}`}></div>
            <div className={`${points >= 2 && 'point'}`}></div>
            <div className={`${points >= 3 && 'point'}`}></div>        
        </Content>
    )
}