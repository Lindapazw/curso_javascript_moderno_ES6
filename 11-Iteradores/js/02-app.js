for(let i=0; i<10; i++) {
    if( i == 5){
        console.log('Cinco');
        break;
    }
    console.log(`Numero ${i}`);
}

for(let i=0; i<10; i++) {
    if( i == 5){
        console.log('Cinco');
        continue;
    }
    console.log(`Numero ${i}`);
}