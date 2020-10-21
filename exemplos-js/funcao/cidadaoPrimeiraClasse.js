//  Função em JS é First-Class Object (Citizens)
//  Higher-order function

//  Criar de forma literal
function fun1() {}

//  Armazenar em uma variavel
const fun2 = function() {}

//  Armazenar em um array
const array = [function(a,b) {return a + b}]
console.log(array[0](2,3))

//  Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'HENRIQUE É FODA'}
console.log(obj.falar());

// Passar funcão como parametro
function run(fun){
    fun()
}

run(function (){ console.log('executando...') })

// Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)