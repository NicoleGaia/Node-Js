import { Request, Response } from "express"
import { getPlayerService } from "../services/player-services"


export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = req.params.id
    console.log(id)
}