import { CardFront, CardBack } from "./style";

import cssImg from '../../assets/logo-css.png'
import profileImg from '../../assets/profile.jpg'

export function CardGame() {
    return(
        <>
            <CardFront>
                <img src={profileImg} alt="profile pic"/>
            </CardFront>
            {/* <CardBack>
                
            </CardBack> */}
        </>
    )
}