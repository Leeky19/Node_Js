const readline = require('readline');

//definition de la map
const map = [   ['#', '#', '#', '#', '#', '#', '#', '#'],
                ['#', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
                ['#', ' ', '#', '#', '#', '#', ' ', '#'],
                ['#', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
                ['#', '#', '#', '#', '#', '#', '#', '#']
];

/**
 * fonction qui permet d'afficher la map
 */
function drawMap() {
    for (let row of map) {
      console.log(row.join(''));
    }
  }

  drawMap(); //exemple d'affichage


  //Deffintion de Pacman

let pacmanX = 1; //coordonné de pac-man en absice
let pacmanY = 1; // coordonne de pac-man en ordonnée