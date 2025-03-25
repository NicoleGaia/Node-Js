import { Request, Response } from "express"
import { getPlayerService } from "../services/player-services"
import { OK } from "../utils/http-helper"

export const getPlayer = async (req: Request, res: Response) => {

    const httpResponse = await getPlayerService()
    

    res.status(httpResponse.statusCode).json(httpResponse.body)
}