import { PlayerModel } from "../models/player-model"


const database: PlayerModel[] = [
    {
        id: 1, 
        name: "Lionel Messi",
        club: "PSG",
        nationality: "Argentina",
        position: "Atacante"
    },
    {
        id: 2, 
        name: "Vinícius Jr",
        club: "Real Madrid",
        nationality: "Brasil",
        position: "Atacante"
    },
    {
        id: 3, 
        name: "Raphinha",
        club: "Barcelona",
        nationality: "Brasil",
        position: "Artilheiro"
    },
    {
        id: 4, 
        name: "Joshua Kimmich",
        club: "Bayern de Munique",
        nationality: "Alemanha",
        position: "Meio de campo"
    },
    {
        id: 5, 
        name: "Lucas Beraldo",
        club: "PSG",
        nationality: "Brasil",
        position: "Defensor"
    },{
        id: 6, 
        name: "Florentino",
        club: "Benfica",
        nationality: "Portugal",
        position: "Meio de campo"
    },
]


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (
    id: number
): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex( p => p.id === id)

    if(index != -1){
        database.splice(index, 1)
        return true
    }

return false
}