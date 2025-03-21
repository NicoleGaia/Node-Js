
# Podcast menager

### Descrção 
Um app ao estilo netflix, onde possa centralizar diferentes episódios de podcat separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios podcast em sessões de categorias 
    -[saúde, fitness, mentalidade, humor]
- Filtrar episódios por node de podcast

## Como

### Feature:
- Listar os episódios podcast em sessões de categorias

### Como vou implementar:
Vou retornar em uma api rest (json) o nome podcast, nome episódio, imagem de capa, link

```js
[
    {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "5DaLlqP-8uI"
    cover: "https://i.ytimg.com/vi/5DaLlqP-8uI/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDWPwejg-3AzJsHdhwFEEjnmtiZ1Q",
    link: "https://www.youtube.com/watch?v=5DaLlqP-8uI&pp=ygUJY2J1bSBmbG93",
    categories: ["saúde", "esporte", "bodybuilder"]
    },
    {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I"
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDgyHAUb9vIwNYXr8G6ZPXKWyU__A",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I&pp=ygUXZmxvdyBydWJlbnMgYmFycmljaGVsbG8%3D",
    categories: ["esporte", "corrida"]
    },
]

```