import { IncomingMessage, ServerResponse } from "http"

import {serviceListEpisodes} from'../services/list-episodes-services'
import { serviceFilterEpisodes } from "../services/filter-episodes"
import { StatusCode } from "../utils/status-code"
import { ContentType } from "../utils/content-type"
import { FilterPodcastModel } from "../models/filter-podcasts-model"

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) =>{
    const content: FilterPodcastModel = await serviceListEpisodes()

    res.writeHead(content.statusCode, {'content-type': ContentType.JSON})
    res.end(JSON.stringify(content.body))
}

export const getFilterEpisodes = async(
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode, { "content-type": ContentType.JSON})
    res.end(JSON.stringify(content.body))
}