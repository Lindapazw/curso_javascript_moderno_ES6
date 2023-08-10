// function declaration
sumar(10,10)
function sumar(a,b) {
    console.log(a+b);
};

// function expression
const sumar2 = function(a,b) {
    console.log(a+b);
}
sumar2(100,100);

// arrow function
const sumar3 = (a,b) => {
    console.log(a+b);
}
sumar3(100,100);

const tecnologias = (a,b) => {
    console.log(`Tengo ${a} ${b}`);
}

tecnologias(100,100); 