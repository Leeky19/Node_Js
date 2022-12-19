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

/**
 * 
 * @param {*} str une chaine de caractères 
 * @returns une chaine de caractères sans voyelle
 */

function NoVowel(str){
    return str.replace(/[aeiouyéèàùïëîê]/ig, ''); 
    /**
     *  paramettre 1 = ce qui va être remplacé par p2, ici tous les caractères dans cette chaine de caractere 
     * ig indique qu'on annalise toute la chaine str
     * parametre 2 = caractere qui remplace p1
    */
}

//affichage d'un exemple
console.log(NoVowel(string1));

//- 4 Écrivez une fonction qui prend un tableau de chaînes de caractères 
//et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

const AlphaArray = ["Chien", "abricot", "électron","résistance", "Tomate"]; 
/**
 * 
 * @param {*} str un tableau de chaine de caractere
 * @returns un tableau de chaine de caractere tri par ordre aplhabétique (Majuscule avant miniscule), prise en compte du code ascii
 */
function AlphaAscii(str){
    return str.sort();      // tri par ordre alphabéique avec le code ascii
}
console.log(AlphaAscii(AlphaArray));



//- 5 Écrivez une fonction qui prend un nombre en argument 
//et renvoie une chaîne de caractères représentant ce nombre en mots. 
//Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".







//- 6 Écrivez une fonction qui prend un tableau d'objets 
//et un nom de propriété et renvoie un tableau des valeurs 
//de cette propriété dans chaque objet.



//- 7 Écrivez une fonction qui prend un tableau de nombres 
//et renvoie un tableau de nombres triés par ordre décroissant.

/*
const newArray = [3, 6, 1, 9, -2];

function ArrayDecreasing(newArray)
const sortDecreasing = (a, b) => b - a;
tab.sort(sortDecresind);


console.log(tab);
*/
//- 8 Écrivez une fonction qui prend une chaîne de caractères et 
//renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

/**
 * 
 * @param {*} str une chaine de caractere contenant une voyelle minimum
 * @returns une chaine de caractere avec voyelle en majuscule
 */
function BigVowel(str){
    const a = str.replace(/[aà]/ig, 'A'); //remplacement des a miniscule en majuscule modifie la chaine de caractere entree en parametre
    const e = a.replace(/[eéèêë]/ig, 'E'); // remplace les e miniscule en majuscule modifie la chaine où les à sont en majuscule etc...
    const i = e.replace(/[iïî]/ig, 'I');
    const o = i.replace(/[oôö]/ig, 'O');
    const u = o.replace(/[uüû]/ig, 'U');
    const y = u.replace(/[y]/ig, 'Y');
    return y;
}

//affiche un exemple
console.log(BigVowel(string1));


//- 9 Écrivez une fonction qui prend une chaîne de caractères 
//et renvoie le nombre de voyelles dans cette chaîne.

//tableau de chaine de caractere des voyelles en miniscule
const vowels = ["a", "e", "i", "o", "u", "é", "è", "à", "ù", "ï", "ë", "î", "ê"]

/**
 * 
 * @param {*} str une chaine de caractere
 * @returns le nombre de voyelles dans la string
 */
function countVowel2(str) {
    let count = 0; // initialisation du compteur
    for (let letter of str.toLowerCase()) { // les lettres de str sont passer une à une en minuscule et devienne des "variables"
        if (vowels.includes(letter)) { // test pour savoir si la lettre de str est aussi dans voyelle
            count++; //count = count + 1
        }
    }
    return count
}
//afficher un exemple
console.log(countVowel2(string1));

//- 10 Écrivez une fonction qui prend une chaîne de caractères 
//et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

/*
function BigNoVowel(str){
    for(let i = 0; i<str.length; i++){
        if(str[i]==/[aeiouyéèàùïëîê]/){
           str[i] = str[i].toUpperCase();
        }
    }
    return str
}
*/