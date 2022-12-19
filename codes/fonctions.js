/*
function sum (numberOne, numberTwo){
        return numberOne + numberTwo
}

// ceci est la meme fonction
const sum = (numberOne,numberTwo) => {
    return numberOne + numberTwo
}
*/

/** ceci est une fonction
 * numberOne est un parametre (ou agrument) de la fonctioon timeTwo
 * entre les accolade se trouve le corps de la fonction, c'est la qu'est 
 * stockée la logique de la fonction
 */
function square (number){
    return number * number ;
}

//ceci ets la même fonction
const square = (number) => {
    return number * number;
}

//ceci ets la même fonction quand il y a une suel parametre on peut enlever tous les parametre.
const square = number => {
    return number * number;
}

//ceci est la même fonction il y a un retrun mais il est implicite  
const square = number => number * number;

const number = square(2); 
console.log(number);