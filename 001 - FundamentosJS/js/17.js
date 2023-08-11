// scope

const precio = 300;
console.log(`Precio desde global ${precio}`);

function nuevaFunction() {
    const precio = 600;
    console.log(`Precio desde function ${precio}`);
}

if(true) {
    console.log(`Precio desde if ${precio}`);
}

nuevaFunction();

