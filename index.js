//Codigo que gera um xp aleatorio de dentro do array para o personagem 
//Assim indicando seu nivel de Aventureiro


//Nome do Heroi
let nomeHeroi = "Valent O Bárbaro"

let nivel = ""


// Array de xp para agregar junto a função chamada
let xp = [
    [550], [3750], [14000], [9200], [1999], [6850], [7853], [8123]
]
//Aqui chamamso uma função para embaralhar
function embaralharIndices(array) {
    // laço de repetição
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
    }
    return array;
}
//criamos um array de indices embaralhados
let indicesEmbaralhados = embaralharIndices([...Array(xp.length).keys()]);
// outro laço para percorrer o array original
for (let i = 0; i < indicesEmbaralhados.length; i++) {
    let indice = indicesEmbaralhados[i];
    let valorXP = xp[indice][0];
// Estrutura de Decisão 
    if (valorXP <= 1000){
       nivel = "Ferro"
    }else if (valorXP >= 1001 && valorXP <= 2000){
       nivel = "Bronze"
    }else if (valorXP >= 2001 && valorXP <= 5000){
       nivel = "Prata"
    }else if (valorXP >= 6001 && valorXP <= 7000){
       nivel = "Ouro"
    }else if (valorXP >= 7001 && valorXP <= 8000){
       nivel = "Platina/Diamante"
    }else if (valorXP >= 8001 && valorXP <= 9000){
       nivel = "Ascendente"
    }else if (valorXP >= 9001 && valorXP <= 10000){
       nivel = "Imortal"
    }else if (valorXP >= 10001){
       nivel = "Radiante"
  }
}
  console.log("O heroi de nome " + nomeHeroi + " está no nivel de: " + nivel)
