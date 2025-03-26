import { Request, Response } from "express"
import { createPlayerService, getPlayerByIdService, getPlayerService } from "../services/player-services"
import { noContent } from "../utils/http-helper"


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
    } else {
        const response = await noContent()
       res.status(response.statusCode).json(response.body)
    }
    
}