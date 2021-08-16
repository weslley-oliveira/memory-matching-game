import { Content } from "./style";
import profileImg from '../../assets/profile.jpg'
import { useState } from "react";


interface CardGameProps {
    img: string,
    name: string,
    matching: boolean,
}

export function CardGame({ img, name, matching }:CardGameProps ) { 
    const [active, setActive] = useState('')

    function handleCard() {
        setActive('active')
        setTimeout(() => {
            setActive('')
        }, 1000);
    }

    return(
        <Content onClick={handleCard}>
            <div className={`flip-card-inner ${active}`}>
                <div className={`flip-card-front ${matching && 'matching'}`} >
                    <img src={profileImg} alt="profile pic"/>
                </div>
                <div className="flip-card-back">
                    <img src={img} alt={name}/>
                </div>
            </div>            
        </Content>
    )
}