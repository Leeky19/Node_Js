//-1 Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

const fs = require('fs'); //importation d'un module et stockage dans une variable, ce fait grace à 'require'
/**
 * prend en parametre une adresse du fichier et le lit 
 */

/*
fs.readFile('test.txt', 'utf-8', (err, data) => { //1er parametre = chemin, 2eme = option/flag , 3eme = callback et 3trois surgagements, résultat = encodage  
    if(err) {
        console.log(err);
        return;
    }
    console.log(data); //si pas d'erreur il affiche ce qu'il y a dans le fichier
})
*/

//2- Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

/**
 * prend en parametre une adresse du fichier et écrit dedans en écrasant ce qui existe déjà
 */
/*
fs.writeFile('test.txt', 'utf-ergergerg est là', (err, data) => {
    fs.readFile('test.txt', 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(data); //si pas d'erreur il affiche ce qu'il y a dans le fichier
    })
})
*/

/* un programme qui ecrit directement ce qu'il y a dans le fichier mais affiche un undifined 
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

/*
const http = require('http');

fs.readFile('test.txt', 'utf-8', (err, data) => { //1er parametre = chemin, 2eme = option/flag , 3eme = callback et 3trois surgagements, résultat = encodage  
    if(err) {
        console.log(err);
        return;
    }
})

const Server = http.createServer(function (req, res) {
  res.writeHead(200)
  res.end(fs.readFileSync('test.txt','utf-8')); //lit le fichier et l'affiche au format utf-8 sur le serveur
  
})

Server.listen(8080)
*/

/*correction


const fs = require('fs');
const { Http2ServerRequest } = require('http2');
const http = requi*('http')

http.createServer((HttpRequest, httpsRespond) => {

    fs.readFile('test.txt','utf-8', (err,data) => {
        if (err){
            console.log(error)

            httpsRespond.statusCode = 500;
            httpsRespond.end('an error has occured.');
            return
        }

        httpsRespond.setHeader('Content-Type', 'text/plain');
        httpsRespond.end(data);
    })
}).listen(3000, () => {
    console.log('serveur web listening on port 3000')
});
*/

//4- Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.

/*
fs.readdir(__dirname, (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\nCurrent directory filenames:");   //se place dans le dossier où est executer ce code.
      files.forEach(file => {                          // va cherhce les nomns de fichier présent et boucle jusqà ce qu'il les a trouvés
        console.log(file);
      })
    }
  })
*/

//5- Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

/*
//si le fichier n'existe pas il va êre creer, pour creer un nouveaau fichier il faut changer le premier parametre en le renomant 
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
*/

//6- Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.

//importation du module os 
const os = require('os');
console.log(os.homedir()); //affiche le chemin du repertoir personnel de l'utilsateur actuel

//7- Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.

/*
const exe = require('child_process');

exe.exec('ls -lh', (error, stdout, stderr) => { //ls -lh liste tous les fichiers et dossiers dans le repertoir actuel, 
                                                //ecrit du flux de sortie dans stdout
                                                //ecrit le flux d'erreur dans stderr 
  if (error) {
    console.error(`error: ${error.message}`); //affiche si il n'est pas possible d'executer la commande l'erreur de la console s'il y en a une .
    return; 
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`); //si il y a quelque chose dans le stderr il est affiché, correspond à une erreur lorsque la commande s'execute 
    return;
  }

  console.log(`stdout:\n${stdout}`);
});
*/

//8- Écrivez un programme Node.js qui utilise le module path pour manipuler les chemins de fichiers.

/*correction
const path = require('path');

const joinPathExample = path.join('/test/path', 'end/of/path');

console.log('output: ', joinPathExample);

const fileExtension = path.extname('test.txt');
console.log('output: ', fileExtension);
*/

//9- Écrivez un programme Node.js qui utilise le module querystring pour analyser une chaîne de requête URL.

//importation du module querstring 
const querystring = require('querystring');

let str = "user=pratik&isMale=true&role=Coder"; // un exemple de chaîne de requêt URL

let output = querystring.decode(str); //annalyse la chaine de requête URL dans son prmeir parametre sous forme d'objet.

console.log("Output: ", output);


//10- Écrivez un programme Node.js qui utilise le module events pour créer un émetteur d'événements personnalisé.


