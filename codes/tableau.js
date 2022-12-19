const myArray = [23432, 33253, 251153553, 315684, 1538486561, 21835, 231546 ];
const someOtherArray = [6 , 3 , 45 , 2 , 15 , 85]; 
//ijndex est la position d'un élément dans le tableau 
//le primier index est l'index 0
/*console.log(myArray[4]);
//commment retrouver les nombres d'element dans le tableau attention difference entre nombre d'ellement et indexation
console.log(myArray.length); 

//boucle for clear
for (let index = 0; index < myArray.length; index++) {
    const arrayContentAtIndex = myArray[index];
    console.log(arrayContentAtIndex);
}

// faire une fonction qui prend un tableau de nombre en prametre 
//et qui retourne le plus grand nombre du tableau
*/
function Big (myArray){
    let big = myArray[0]; //variable de stockage initilisé au premier élément du tableau
    for (let index = 1; index < myArray.length; index++) //parcourt les valleur du tableau une par une jusqu'à la fin de celui-ci
    {
        if(big<myArray[index]) // test pour savoir qui est le plus grand entre les deux valleurs
        {
            big = myArray[index]; // la + grande valleur
        }
    }
    return big;
}

//affichage des resultats de la fonctions avec différents tableaux
console.log(Big(myArray));
console.log(Big(someOtherArray));


//correction
/**
 * @param {*} numbers : an array of number
 */
function getMaxNumber (numbers) {

    let max = numbers[0]; // on declare une variable max et on l'initialise avec le numbers [0]
    
    //on parcourt le tableau numbers avec une boucle for
    for (let i = 0; i < numbers.length; index++) {
        if(numbers[i]>max) {
            max = number[i];
        }
    }
    return max;
}

const result1 = getMaxNumber(someOtherArray);
console.log(result1);


//autre façon de faire

let bigInt = Math.max(...someOtherArray);

function LargestNumber (someOtherArray) {
    return Math.max(...someOtherArray);
}

console.log(LargestNumber(someOtherArray));