import { PlayerModel } from "../models/player-model"
import { findAllPlayers, findPlayerById, insertPlayer } from "../repositories/players-repository"
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

export const createPlayerService = async (player: PlayerModel) => {
    let response = null
    
    //VERIFICA SE ESTÁ VAZIO
    if(Object.keys(player).length != 0){
        await insertPlayer(player)
        response = httpResponse.created()
    } else {
        response =  httpResponse.badRequest()
    }

    return response
}