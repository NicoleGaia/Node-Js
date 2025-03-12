const Player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const Player2 = {
    NOME: "luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

/*const Player3 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
}*/

async function rollDice(){ //async = ñ acontece junto com outras | rollDice = rolar dados
   return Math.floor(Math.random() * 6) + 1 //floor = arredonda num | random = aleatório
}

async function getRandomBlock(){ //pegue um bloco aleatório
    let random = Math.random() // random = aleatório
    let result 

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
    }
    return result
}

async function logRollResult(characterName, block, diceResult, atribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${atribute} = ${diceResult + atribute}`)
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){ // for(inicio; condição; incremneto)
        console.log(`🏁 Rodada ${round}`)

        //sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

         //rolar dados
         let diceResult1 = await rollDice()
         let diceResult2 = await rollDice()
 
         //teste de habilidade
         let TotalTestSkill1 = 0
         let TotalTestSkill2 = 0
 
         if(block === "RETA"){
             TotalTestSkill1 = diceResult1 + character1.VELOCIDADE
             TotalTestSkill2 = diceResult2 + character2.VELOCIDADE
 
             await logRollResult(character1.NOME, "VELOCIDADE", diceResult1, character1.VELOCIDADE)
             await logRollResult(character2.NOME, "VELOCIDADE", diceResult2, character2.VELOCIDADE)
         }
 
         if(block === "CURVA"){
             TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
             TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE
 
             await logRollResult(character1.NOME, "MANOBRABILIDADE", diceResult1, character1.MANOBRABILIDADE)
             await logRollResult(character2.NOME, "MANOBRABILIDADE", diceResult2, character2.MANOBRABILIDADE)
         }
 
         if(block === "CONFRONTO"){
             let powerResult1 = diceResult1 + character1.PODER
             let powerResult2 = diceResult2 + character2.PODER
 
         }
    }

       
}

(async function main(){ // função auto invocada
    console.log(`🏁🚨 Corrida entre ${Player1.NOME} e ${Player2.NOME} começando... \n`) //tecla windows + tecla ponto

    await playRaceEngine(Player1, Player2)
})() 

