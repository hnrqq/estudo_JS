console.log(typeof Object)

class prod{} 
    console.log(typeof prod);


// função sem retorno
function imprimirSoma(a,b){
    console.log(a+b);
}

imprimirSoma(2,3)

//funcao com retorno
function soma(a,b = 0){
    return a + b
}
console.log(soma(2,4))

