const num1 = 1.0
const num2 = Number('2.0')

console.log(num1,num2)
console.log(Number.isInteger(num1)) // Mostra se ele é um valor inteiro ou ponto flutuante
console.log(Number.isInteger(num2))

const prova1 = 9.532
const prova2 = 5.343

const total = (prova1 + prova2) / 2

console.log(total)
console.log(total.toFixed(1)) // casas decimais que aparecem
console.log(total.toString(2))// em binario