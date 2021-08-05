import { Content } from "./style";

interface PlayerNameProps {
    children: string;
}

export function PlayerName({children}: PlayerNameProps) {
    return <Content>{children}</Content>  
}