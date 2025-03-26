import { findAllPlayers, findPlayerById } from "../repositories/players-repository"
import * as httpResponse from "../utils/http-helper"

export const getPlayerService = async () =>{
    const data = await findAllPlayers()
    let response = null

    if(data){
       response = await httpResponse.OK(data)
    } else {
        response = await httpResponse.noContent()
    }
    

    return response
}

export const getPlayerByIdService = async (id: number) => {
    //pedir pro repositório de dados
    const data = await findPlayerById(id)
    let response = null

    if(data){
        response = await httpResponse.OK(data)
    } else {
        response = await httpResponse.noContent()
    }

    return response
}