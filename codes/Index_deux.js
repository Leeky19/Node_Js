//lire et afficher le contenu d'un fichier // equivalance = import {...}
const fs = require('fs'); //importation d'un module et stockage dans une variable, ce fait grace à 'require'

fs.readFile('test.txt', 'utf-8', (err, data) => { //1er parametre = chemin, 2eme = option/flag , 3eme = callback et 3trois surgagements, résultat = encodage  
    if(err) {
        console.log(err);
        return;
    }
    console.log(data); //si pas d'erreur il affiche ce qu'il y a dans le fichier
})