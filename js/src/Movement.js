class Movement {
    constructor() {
        window.onkeydown = (ev) => {
            if (ev.key.startsWith("Arrow")) {
                var direction = ev.key.substring(5).toLowerCase();
                Movement.move(direction);
            }
        };
    }

    static nextPos(currentPos, direction) {
        return new Position(currentPos.row + this.moveDeltas[direction][0],
            currentPos.column + this.moveDeltas[direction][1]);
    }

    static move(direction) {
        var game = Game.getInstance();
        var currentPos = game.getCurrentPosition();
        var nextPos = Movement.nextPos(currentPos, direction);
        Game.getInstance().move(nextPos, direction);
    }
}

Movement.moveDeltas = {
    up: [0, -1],
    down: [0, 1],
    left: [-1, 0],
    right: [1, 0]
};