import { IncomingMessage } from "http"
import { repositoryPodcasts } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/filter-podcasts-model"
import { StatusCode } from "../utils/status-code"


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<FilterPodcastModel> =>{
   
    //define a interface de retorno
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }

    //buscando os dados
    const querryString = podcastName?.split("?p=")[1] ?? ""
    const data = await repositoryPodcasts(querryString)

    //verificando se tem conteúdo
    if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT
    }

    responseFormat.body = data

    return  responseFormat
}