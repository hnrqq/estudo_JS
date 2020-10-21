// factory simples

function criarPessoa(){
    return {
        nome: 'Henrique',
        sobrenome: 'Freitas'
    }
}

console.log(criarPessoa());

//----------------------------------

function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('nootbook', 2199.49));
console.log(criarProduto('mouse', 149.56));