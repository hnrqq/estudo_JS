console.log(soma(3,5)); // pode declarar antes

// function declaration

function soma(x,y){
    return x + y
}

// function expression

const sub = function(x,y) {
    return x - y
}
console.log(sub(3,5));

// name function expression

const mult = function mult(x, y){
    return x * y
}

console.log(mult(3,5));