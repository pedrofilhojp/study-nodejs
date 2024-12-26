const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};


async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random()
    let result

    switch(true){
        case random < 0.33:
            result = "reta"
            break;
        case random < 0.66:
            result = "curva"
            break;
        default:
            result = "confronto"

    }
    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    // ## Example of Expresison in JS
    // Forma de atribuir um resultado de calculo dentro de uma variável exibindo seu valor
    console.log(
        `${characterName.NOME} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
            diceResult + attribute
        }`
    )

}

async function playRaceEngine(character1, character2){
    
    for (let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);
        // sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)        

        // Rolar os dados

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();


        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "reta"){
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            
            await logRollResult(character1, "velocidade", diceResult1, character1.VELOCIDADE)
            await logRollResult(character2, "velocidade", diceResult2, character2.VELOCIDADE)
        }
        if(block === "curva"){
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(character1, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE)
            await logRollResult(character2, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE)
        }
        
        if(block === "confronto"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}`)
            
            await logRollResult(character1, "poder", diceResult1, character1.PODER)
            await logRollResult(character2, "poder", diceResult2, character2.PODER)

            // ## Exemplo com Condição dupla de if
            if (powerResult1 > powerResult2 && character2.PONTOS > 0){
                character2.PONTOS--;
            }


            // ## Exemplo com If ternário
            // Se for VERDADE, subtrai 1 se não, não subtrai nada
            character1.PODER -= 
                powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0;
            // // if (powerResult2 > powerResult1){
            // //    if (powerResult1.PONTOS > 0)
            // //        character1.PODER--; 
            // // }


            console.log(powerResult1 === powerResult2 ? "Confronto empatado": "")
        }


        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.NOME} marcou 1 ponto`);
            character1.PONTOS++;
        }else if(totalTestSkill1 < totalTestSkill2){
            console.log(`${character2.NOME} marcou 1 ponto`);
            character2.PONTOS++;
        }
        console.log("-----------------------------------")
    }
}

async function declareWinner(character1, character2){
    console.log("Resultado Final")
    console.log(`${character1.NOME}: ${character1.PONTOS} pontos(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} pontos(s)`)

    if(character1.PONTOS > character2.PONTOS)
            console.log(`\n ${character1.NOME} venceu a corrida! -----`);
        else if (character1.PONTOS < character2.PONTOS)
            console.log(`\n ${character2.NOME} venceu a corrida! -----`);
        else
            console.log(`\n A corrida terminou empate -----`);
    
}

async function main(){


    console.log(
        `🏁 🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando ... \n`
    );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
}

main();