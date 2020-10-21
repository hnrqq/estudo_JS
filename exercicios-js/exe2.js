function triangulos(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return "Equilatero"
    } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3 ){
        return "Isosceles"
    }else {
        return "Escaleno"
    }
}

console.log(triangulos(4,4,4))
console.log(triangulos(3,3,4))
console.log(triangulos(3,5,6))

