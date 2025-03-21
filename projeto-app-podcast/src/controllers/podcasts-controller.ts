import { IncomingMessage, ServerResponse } from "http"

import {serviceListEpisodes} from'../services/list-episodes-services'
import { serviceFilterEpisodes } from "../services/filter-episodes"

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) =>{
    const content = await serviceListEpisodes()

    res.writeHead(200,{'content-type': "aplication/json"})
    res.end(JSON.stringify(content))
}

export const getFilterEpisodes = async(
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const querryString = req.url?.split("?p=")[1] ?? ""
    const content = await serviceFilterEpisodes(querryString)

    res.writeHead(200, { "content-type": "aplication/json"})
    res.end(JSON.stringify(content))
}