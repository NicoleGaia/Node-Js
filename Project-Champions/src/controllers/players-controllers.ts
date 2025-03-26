import { Request, response, Response } from "express"
import { createPlayerService, getPlayerByIdService, getPlayerService, deletePlayerService } from "../services/player-services"


export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id) //parseInt transforma string em number
    const httpResponse = await getPlayerByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
    const bobyValue = req.body
    const httpResponse = await createPlayerService(bobyValue)

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}