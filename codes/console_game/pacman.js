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

  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '#', '#', '#', '#', '#', '#', '.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '#', '#', '#', '#', '#', '#', '.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],

  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']

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

    return;

  }

 

  // Mettre à jour la position de Pac-Man, Pac-man prend la veleur de ces nouveaux coordonnées

  pacman.top = newTop;

  pacman.left = newLeft;


  
  screen.render();

});


let ghost = blessed.text({

    top: 1,   //position en ordonne
  
    left: 1,  //position en absice 
  
    content: 'G', //caractere qui represente Pac-man
  
    style: {
  
      fg: 'red' //couleur du caractere
  
    }
  
  });

  screen.append(ghost);







 
//mettre à jour l'affcihage de la fenetre de terminal
screen.render();

 

/**
 *Démarre la boucle d'événements de la bibliothèque de terminal
 */
screen.key(['escape', 'space', 'C-c'], function(ch, key) {

  return process.exit(0); //permet de fermer le termaine en appuyant sur la barre d'espace

});