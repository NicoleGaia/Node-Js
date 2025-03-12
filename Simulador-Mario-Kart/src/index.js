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
            
             console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`)

             await logRollResult(character1.NOME, "PODER", diceResult1, character1.PODER)
             await logRollResult(character2.NOME, "PODER", diceResult2, character2.PODER)

             if(powerResult1 > powerResult2){
                if(character2.PONTOS > 0){
                    character2.PONTOS--
                    console.log(`${character2.NOME} perdeu 1 ponto!`)
                }
             }

             if(powerResult2 > powerResult1){
                if(character1.PONTOS > 0){
                    character1.PONTOS--
                    console.log(`${character1.NOME} perdeu 1 ponto!`)
                }
             }

             if(powerResult1 === powerResult2){
                console.log(`Nenhum ponto foi perdido!`)
             }
         }

         if(TotalTestSkill1 > TotalTestSkill2){
            console.log(`${character1.NOME} marcou 1 ponto!`)
            character1.PONTOS++
         } else if(TotalTestSkill2 > TotalTestSkill1){
            console.log(`${character2.NOME} marcou 1 ponto!`)
            character2.PONTOS++
         }

         console.log('-----------------------------------')
    }

       
}

async function declareWinner(character1, character2) {
    console.log(`🏁🏆 A corrida terminou! 🏆🏁 \n`)
    console.log(`🏅 Resultado final:`)
    console.log(`${character1.NOME}: ${character1.PONTOS} pontos`)
    console.log(`${character2.NOME}: ${character2.PONTOS} pontos`)

    if(character1.PONTOS > character2.PONTOS){
        console.log(`\n🎉🏆 ${character1.NOME} foi o grande VENCEDOR! PARABÉNS!🎉`)
    } else if(character2.PONTOS > character1.PONTOS){
        console.log(`\n🎉🏆 ${character2.NOME} foi o grande VENCEDOR! PARABÉNS!🎉`)
    } else{
        console.log('\n🎉🏆 Foi empate! 🎉🏆')
    }
}

(async function main(){ // função auto invocada
    console.log(`🏁🚨 Corrida entre ${Player1.NOME} e ${Player2.NOME} começando... \n`) //tecla windows + tecla ponto

    await playRaceEngine(Player1, Player2)
    await declareWinner(Player1, Player2)
})() 

