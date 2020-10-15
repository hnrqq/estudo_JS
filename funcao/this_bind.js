const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();

// --------------

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()

// -------------------

function Pessoa(){ //Primeira opção
    this.idade = 0 

    setInterval(function(){
        this.idade++
        console.log(this.idade);
    }.bind(this),1000)
}

new Pessoa

function Pessoa(){
    this.idade = 0 

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade);
    },1000)
}

new Pessoa