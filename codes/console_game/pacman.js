const blessed = require('blessed');

 

// Créer une fenêtre de terminal

const screen = blessed.screen({

  smartCSR: true //permet de maintenir le terminal ouvert

});

 

screen.title = 'Pac-Man'; //nom de la fenetre du terminal

 

/**
 * affiche la carte qui est entrée en paremettre
 * @param {*} map prends en parametre une map 
 * '.' correspond au pac-gomme à recuperer sur le terrain
 * '#' correspond au murs
 */

function drawMap(map) {

  for (let y = 0; y < map.length; y++) { //ordonne 

    for (let x = 0; x < map[y].length; x++) { //abscice

      let char = map[y][x]; //cellule

      let color = 'white'; //ce qu'on affiche est blanc

      if (char === '#') color = 'blue';

      let text = blessed.text({ //creer un objet texte avec les propriété suivante

        top: y, //correspond à la ligne de l'écran où va être afficher le caractere 

        left: x, //correspond à la collone de l'écran où va être afficher le caractere 

        content: char, // determine le caractere à afficher 

        style: { //propriete de couleur du caracter : ce qu'on affiche différente entre les . # P et F

          fg: color 

        }

      });

      screen.append(text);//affiche le cararctere à l'écran à l'aide de la couleur definitie plus haut 

    }

  }

}

 

// Exemple de carte

let map = [

  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '.', '.', '#', '#', '#', '#', '.', '.', '.', '.', '.', '.', '.', '#', '#', '.', '.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '.', '.', '.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '.', '.', '#', '#', '#', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.','.', '.', '#'],

  ['#', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.','.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '#', '.', '.','.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.','.', '#'],

  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
];

 

// affiche la carte

drawMap(map);

 

 

// Créer un personnage pour Pac-Man

let pacman = blessed.text({

  top: 5,   //position en ordonne

  left: 3,  //position en absice 

  content: 'P', //caractere qui represente Pac-man

  style: {

    fg: 'yellow' //couleur du caractere

  }

});


/**
 * affcihe pacman dans l'objet screen avec ses propiéte
 */
screen.append(pacman);

 
/**
 * Gérer les déplacements de Pac-Man en utilisant les entrées clavier
 * on utilisera les fleche du clavier.
 * on peut remplacer ses touches par 
 * up = 'z'
 * down = 's'
 * left = 'q'
 * right = 'd'
 */

screen.key(['up', 'down', 'left', 'right'], (ch, key) => {

  let newTop = pacman.top;
  let newLeft = pacman.left;

  if (key.name === 'up') newTop--;      //si on appuis sur la touche 'up', pacman "monte"

  if (key.name === 'down') newTop++;    //ect

  if (key.name === 'left') newLeft--;

  if (key.name === 'right') newLeft++;


  // Vérifier si Pac-Man ne sort pas de la carte et ne se déplace pas à travers les murs

  if (newTop < 0 || newTop >= map.length || newLeft < 0 || newLeft >= map[0].length || map[newTop][newLeft] === '#') {

    return; //termine l'execution de la fonction, si aucune des verification n'échoue on peut effectuer les actions suivantes
            //si le programme passe dans le if on sort de la fonction et donc on ne va pas se deplacer

  }
  

  // Mettre à jour la position de Pac-Man, Pac-man prend la veleur de ces nouveaux coordonnées
  pacman.top = newTop;
  pacman.left = newLeft;

  screen.render();

});


let ghost = blessed.text({

    top: 1,   //position en ordonne
  
    left: 1,  //position en absice 
  
    content: 'G', //caractere qui represente Fantome
  
    style: {
  
      fg: 'red' //couleur du caractere
  
    }
  
  });
// affiche le fantome
  screen.append(ghost);


/**
 * le but de cette fonction est que le fantome se rapproche du joueur (elle prend en paramettre deux objets)
 * @param {*} ghostPos position du fantome
 * @param {*} pacmanPos position de pacman 
 * @returns un objet qui contient les nouveaux coordonnees en absice et ordonée pour le fantome
 */
function moveGhost(ghostPos, pacmanPos) {

  let newTop = ghostPos.top;
  let newLeft = ghostPos.left;

  // Déterminer la direction la plus proche de Pac-Man

  if (ghostPos.top > pacmanPos.top) newTop--;

  else if (ghostPos.top < pacmanPos.top) newTop++;

  if (ghostPos.left > pacmanPos.left) newLeft--;

  else if (ghostPos.left < pacmanPos.left) newLeft++;

  return {

    top: newTop,

    left: newLeft

  };

}

 

/**
 * Mettre à jour la position du fantôme et verification si il y a un game over toutes les 500 millisecondes
 */ 
setInterval(() => {

    // Mettre à jour la position du fantôme
    let newPos = moveGhost({ top: ghost.top, left: ghost.left }, { top: pacman.top, left: pacman.left });
    
    // Vérifier que le fantôme ne sort pas de la carte et ne se déplace pas à travers les murs
    if (newPos.top < 0 || newPos.top >= map.length || newPos.left < 0 || newPos.left >= map[0].length || map[newPos.top][newPos.left] === '#') {
    
    return; //sort de la fonction si remplis une des condition du if
  }

    ghost.top = newPos.top;
    ghost.left = newPos.left;
    screen.render();

    // Vérifier la fin de jeu
    checkGameOver();
  }, 500);

//}, 500); //temps de refresh


function checkGameOver() {

    if (pacman.top === ghost.top && pacman.left === ghost.left) { //condition de game over : le fantome à les meme coordonnée que Pac-man 
  
      // Afficher un message de fin de jeu
  
      let gameOverText = blessed.text({             //creation  de l'objet textuel Game Over
        top: Math.floor(map.length / 2),            //moitie des lignes
        left: Math.floor(map[0].length / 2 - 5) ,   //moitier des collone -5 pour centrer le texte
        content: 'Game Over!',                       //texte à afficher
        style: {

          fg: 'red',
          bold: true //gras du texte
        
        }
     });

      screen.append(gameOverText);
      screen.render();
      process.exit(0); //fin du jeu

    }
  
  }
  
  // Vérifier si il n'y a pas de game over toutes les 500 ms
  setInterval(checkGameOver, 500);


// fonction pour le score mais ne fonctionne pas 
/*let score = 0;

function updateScore(){
    score++;
    score.setContent(`Score : ${score}`);
    screen.render;
}
*/

//Mise à jour de l'affichage de la fenetre de terminal
screen.render();


/**
 *Démarre la boucle d'événements de la bibliothèque de terminal
 */
screen.key(['escape', 'space', 'C-c'], function(ch, key) {

  return process.exit(0); //permet de fermer le termaine en appuyant sur la barre d'espace

});