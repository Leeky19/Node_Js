export default class Pacman {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    ChangeDirection(_, key) {

        if (keyname === 'd') {
            return Pacman.x++;
        }
        if (keyname === 'q') {
            return Pacman.y--;
        }
        if (kename === 'z') {
            return Pacman.y++;
        }
        if (kename === 's') {
            return Pacman.y--;
        }
    }

    getPosition(Pacman) {
        const x = Pacman.x;
        const y = Pacman.y;
    }

}