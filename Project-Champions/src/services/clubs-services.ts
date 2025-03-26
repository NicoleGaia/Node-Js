import { findAllClubs } from "../repositories/clubs-repository"
import * as httpResponse from "../utils/http-helper"

export const getClubService = async () => {
    const data = await findAllClubs()
    const response = httpResponse.OK(data)
    
    return response
}