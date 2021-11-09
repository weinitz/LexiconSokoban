class PlayerMovement {
    constructor() {
        this.moveDeltas = {
            up: [0, -1],
            down: [0, 1],
            left: [-1, 0],
            right: [1, 0]
        };
        window.onkeydown = (ev) => {
            if (ev.key.startsWith("Arrow")) {
                var direction = ev.key.substring(5).toLowerCase();
                this.move(direction);
            }
        };
    }

    nextPos(currentPos, direction) {
        return new Position(currentPos.row + this.moveDeltas[direction][0],
            currentPos.column + this.moveDeltas[direction][1]);
    }

    move(direction) {
        var game = Game.getInstance();
        var currentPos = game.getCurrentPosition();
        var nextPos = this.nextPos(currentPos, direction);
        Game.getInstance().move(nextPos, direction);
    }
}