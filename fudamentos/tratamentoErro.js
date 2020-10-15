function tratarErro(erro){
    throw new Error('o erro está sendo tratado\n')
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErro(e)
    } finally {
        console.log('final...\n');
    }
}

const obj = {name: 'Henrique'}
imprimirNomeGritado(obj)