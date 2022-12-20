//-1 Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

const fs = require('fs'); //importation d'un module et stockage dans une variable, ce fait grace à 'require'
/**
 * prend en parametre une adresse du fichier et le lit 
 *//*
fs.readFile('test.txt', 'utf-8', (err, data) => { //1er parametre = chemin, 2eme = option/flag , 3eme = callback et 3trois surgagements, résultat = encodage  
    if(err) {
        console.log(err);
        return;
    }
    console.log(data); //si pas d'erreur il affiche ce qu'il y a dans le fichier
})
*/

//2- Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.
/*
/**
 * prend en parametre une adresse du fichier et écrit dedans en écrasant ce qui existe déjà
 */

fs.writeFile('test.txt', 'utf-ergergerg est là', (err, data) => {
    fs.readFile('test.txt', 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(data); //si pas d'erreur il affiche ce qu'il y a dans le fichier
    })
})


/* une programme qui ecrit directement ce qu'il y a dans le fichier mais affiche un undifined 
fs.writeFile('test.txt', 'test de test de test', (err, data) => { //mettre le nom d'un fichier existant, modifie en écrasant les données présents
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
})
*/



//3- Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.
/**
 * creer un serveur et affiche du texte
 */
const http = require('http');

fs.readFile('test.txt', 'utf-8', (err, data) => { //1er parametre = chemin, 2eme = option/flag , 3eme = callback et 3trois surgagements, résultat = encodage  
    if(err) {
        console.log(err);
        return;
    }
})

const Server = http.createServer(function (req, res) {
  res.writeHead(200)
  res.end(fs.readFileSync('test.txt','utf-8'));
  
})

Server.listen(8080)

//4- Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.



//5- Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.



//6- Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.

//7- Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.

//8- Écrivez un programme Node.js qui utilise le module path pour manipuler les chemins de fichiers.

//9- Écrivez un programme Node.js qui utilise le module querystring pour analyser une chaîne de requête URL.

//10- Écrivez un programme Node.js qui utilise le module events pour créer un émetteur d'événements personnalisé.
