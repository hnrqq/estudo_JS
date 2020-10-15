function media(nota){
    if(nota >= 7){
        console.log('PARABENS, SUA NOTA FOI: ' + nota)
    }else{
        console.log('VOCE NÃO FOI APROVADO: ' + nota);
    }
}

media(8.1)
media(5.3)


Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirNota = function(nota){
    if(nota.entre(9, 10)){
        console.log('PARABENS, QUADRO DE HONRA');
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado');
    } else if(nota.entre(4, 6.99)){
        console.log('Reprovado');
    }
}

imprimirNota(9)
imprimirNota(7)
imprimirNota(5)