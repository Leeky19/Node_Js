const
    Direction,
    DirectionRight,
    DirectionLeft,
    DirectionUp,
    DirectionDown
} = require('./constantes') //importation des constantes du fichier constantes.js


class Game {

}

changeDirection(_, key) {
    if (key.name === DirectionRight || key.name === 'd') {
        this.currentDirection = DirectionRight;
    }
    if (key.name === DirectionLeft || key.name === 'q') {
        this.currentDirection = DirectionLeft;
    }
    if (key.name === DirectionUp || key.name === 'z') {
        this.currentDirection = DirectionUp;
    }
    if (key.name === DirectionDown || key.name === 's') {
        this.currentDirection = DirectionDown;
    }
}