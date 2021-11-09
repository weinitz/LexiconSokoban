class WonState extends GameState {
    constructor() {
        super(...arguments);
        this.name = "WonState";
    }

    move(nextPosition, direction) {
        Game.getInstance().board.rootElement.textContent = "Grattis";
    }
}