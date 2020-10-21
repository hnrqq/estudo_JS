function dinheiro(valor){
    valorReais = `R$ ${valor.toFixed(2).toString().replace(".", ", ")}`
    console.log(valorReais);
}

dinheiro(0.1 + 0.2)