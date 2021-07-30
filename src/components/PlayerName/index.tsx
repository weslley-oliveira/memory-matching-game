interface PlayerNameProps {
    name: string;
}

export function PlayerName({name}: PlayerNameProps) {
    return <p>{name}</p>  
}