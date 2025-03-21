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

    const content = await serviceFilterEpisodes(req.url)

    res.writeHead(200, { "content-type": "aplication/json"})
    res.end(JSON.stringify(content))
}