import { Request, Response } from "express"
import { getPlayerService } from "../services/player-services"

export const getPlayer = async (req: Request, res: Response) => {

    const data = getPlayerService()
    res.status(200).json(data)
}