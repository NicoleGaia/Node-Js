import { IncomingMessage, ServerResponse } from "http"

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) =>{
    res.writeHead(200,{'content-type': "aplication/json"})
    res.end({
       name: "Nicole" 
    })
}