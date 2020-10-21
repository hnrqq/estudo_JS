const valores = [1,2,3,4,5,6]
console.log(valores)
console.log(valores.length) // tamanho do array

valores.push(7,8,9,10)
console.log(valores)

console.log(valores.pop()) // retira o oque tiver na ultima posição do vetor
delete valores[0] //deleta o que estiver na posição do vetor
console.log(valores)