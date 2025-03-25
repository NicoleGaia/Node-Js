import { noContent, OK } from "../utils/http-helper"

export const getPlayerService = async () =>{
    const data = { player: "ronaldo"}
    let response = null

    if(!data){
       response = await OK(data)
    } else {
        response = await noContent()
    }
    

    return response
}