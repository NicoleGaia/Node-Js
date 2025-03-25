import { Request, Response } from "express"
import { getPlayerService } from "../services/player-services"
import { OK } from "../utils/http-helper"

export const getPlayer = async (req: Request, res: Response) => {

    const data = getPlayerService()
    const response = await OK(data)

    res.status(response.statusCode).json(response.body)
}