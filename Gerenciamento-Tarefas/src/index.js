var titulo
var descricao
var prazo

titulo = ('Monitoramento de rede')
descricao = ('Rede configurar alertas em tempo real')
prazo = ('18/12')

if(descricao.length > 25){
    console.log('O Valor da descricao excede a quantidade de caracteres permitido.')
} else {
    console.log(`Tarefa {${titulo}} criada com sucesso!`)
    console.log(descricao + ' - ' + prazo)
}