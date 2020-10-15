function area(largura,altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area} m2.`) // Aqui não tem retorno
    }else{
        return area // Aqui tem 
    }
}

console.log(area(10,4));