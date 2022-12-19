//- 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
/**
 * 
 * @param {*} numberOne nombre n°1 floatant
 * @param {*} numberTwo nombre n°2 floatant
 * @returns Somme entre deux nombres
 */
function sum (numberOne, numberTwo){
    return numberOne + numberTwo
}

//affichage de la fonction
console.log(sum(1,6));


//- 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

//notre tableau de nombre float
const OtherArray = [-6 , -3 , -7 , -2.29 , -5 , -9.2]; 

/**
 * 
 * @param {*} myArray un tableau de nombre floatant
 * @returns Le plus grand nombre du tableau 
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

//affichage de la fonction
console.log(Big(OtherArray));

//- 3 Écrivez une fonction qui prend une chaîne de caractères et 
//renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

//definition d'une chaîne de crarctere
const string1 = "Une chaîne de caractères";
/*
function NoVowelString(stringpara){
    for(let i = 0; i<stringpara.length; i++) {

        if (stringpara[i] = 'a' || 'e' || 'i' || 'o' || 'u' ||'A' || 'E' || 'I' || 'O' || 'U');{
            stringpara[i] = stringpara.
        }

    }
}
*/

//- 4 Écrivez une fonction qui prend un tableau de chaînes de caractères 
//et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

//- 5 Écrivez une fonction qui prend un nombre en argument 
//et renvoie une chaîne de caractères représentant ce nombre en mots. 
//Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".

//- 6 Écrivez une fonction qui prend un tableau d'objets 
//et un nom de propriété et renvoie un tableau des valeurs 
//de cette propriété dans chaque objet.

//- 7 Écrivez une fonction qui prend un tableau de nombres 
//et renvoie un tableau de nombres triés par ordre décroissant.


const newArray = [3, 6, 1, 9, -2];

function ArrayDecreasing(newArray)
const sortDecreasing = (a, b) => b - a;
tab.sort(sortDecresind);


console.log(tab);

//- 8 Écrivez une fonction qui prend une chaîne de caractères et 
//renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

//- 9 Écrivez une fonction qui prend une chaîne de caractères 
//et renvoie le nombre de voyelles dans cette chaîne.

//- 10 Écrivez une fonction qui prend une chaîne de caractères 
//et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.
