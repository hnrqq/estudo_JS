function getInteiroEntre(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroEntre(-1, 10)
   console.log(`numeros ${opcao}`)
}

console.log('até a proxima !')