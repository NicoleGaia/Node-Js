import { Request, Response } from "express"
import { getPlayerByIdService, getPlayerService } from "../services/player-services"


export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id) //parseInt transforma string em number
    const httpResponse = await getPlayerByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}