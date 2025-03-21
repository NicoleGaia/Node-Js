import * as http from "http"

import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller'

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
       
        // querryString
        const [baseUrl, querryString] = req.url?.split("?") ?? ["", ""]
        
        console.log(baseUrl)
        console.log(querryString)
       
        // LISTAR PODCASTS
        if(req.method === "GET" && baseUrl === "/api/list"){
            await getListEpisodes(req, res)
        }

        if(req.method === "GET" && baseUrl === "/api/episode"){
            await getFilterEpisodes(req, res)
        }
    }
)

const port = process.env.PORT

server.listen(port, ()=>{
    console.log(`servidor iniciado na porta ${port}`)
})