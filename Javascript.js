const result = document.querySelector("result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playhuman = (humanchoice) => {
   
    playthegame(humanchoice, playmachine())
}

const playmachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomnumber = Math.floor(Math.random() * 3)


    return choices[randomnumber]
}
const playthegame = (humano,    machine) => {

    console.log('humano:' + humano + "Maquina: " + machine)


    if (humano === machine) {
        result.innerHTML = "Deu empate"
    } else if( 
        (humano === "paper" && machine === "rock") || 
        (humano === "rock" && machine ==="scissrs") ||
        (humano ==="scissors" && machine ==="paper")
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para alexa!"
    }
}


