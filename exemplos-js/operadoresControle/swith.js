const imprimirNota = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('QUADRO DE HONRA');
            break
        case 8:
        case 7:
            console.log('APROVADO');
            break
        case 6:
        case 5:
        case 4:
            console.log('REPROVADO');
            break
            default:
                console.log('NOTA INVALIDA');
    }
}

imprimirNota(10);
imprimirNota(7);
imprimirNota(4);
imprimirNota('0')
