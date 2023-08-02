// fizz buzz

// multiplos de 5 fizz
// multiplos de 3 buzz
// multiplos de 5 y 3 fizz buzz

for (var i = 1; i < 20; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(`${i} fizz buzz`);
    } else if ( i % 5 === 0) {
        console.log(`${i} buzz`);
    } else if(i % 3 === 0) { 
        console.log(`${i} fizz`);
    } else {
        console.log(`${i} `);
    }
}

