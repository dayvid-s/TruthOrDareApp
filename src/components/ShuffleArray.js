export default function ShuffleArray(array){  
    var currentIndex = array.length, temporaryValue, randomIndex 
    while (0 !== currentIndex) {           
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }}

// função shuffle ta recebendo o param array, qualquer variavel que 
//seja um array, e eu colocar como paramentro da 
//função shuffle, ele vai embaralhar