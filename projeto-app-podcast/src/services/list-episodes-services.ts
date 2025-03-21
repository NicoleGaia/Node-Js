import { FilterPodcastModel } from "../models/filter-podcasts-model"
import { repositoryPodcasts } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcasts()

    if(data.length !== 0){
            responseFormat.statusCode = StatusCode.OK
        } else {
            responseFormat.statusCode = StatusCode.NO_CONTENT
        }

        responseFormat.body = data

    return responseFormat
}