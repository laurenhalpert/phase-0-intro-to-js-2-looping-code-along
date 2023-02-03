//for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
    
//}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }

    return gifts;
}

wrapGifts(gifts);


function writeCards(names, event){
    const newArray = [];
    for (let i = 0; i < names.length; i++) {
        
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
        
    }
    return newArray;
}

function countDown(integer) {
    
    while (integer>=0) {
        console.log(integer);
        integer--;
    }
}
