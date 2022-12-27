const GameSpeed = 20; //vitesse de rafraichissement du jeu

// constantes servant à modifier les valeurs pour se deplacer
const Direction = {
    rigth: {
        x: 1,
        y: 0
    },
    left: {
        x: -1,
        y: 0
    },
    up: {
        x: 0,
        y: -1
    },
    down: {
        x: 0,
        y: 1
    }
}

const DirectionRight = 'right'; //prend les valeurs rigth etc...
const DirectionLeft = 'left';
const DirectionUp = 'up';
const DirectionDown = 'down';


//exportation des constantes de ce fichier

module.export = {
    GameSpeed,
    Direction,
    DirectionRight,
    DirectionLeft,
    DirectionUp,
    DirectionDown
}