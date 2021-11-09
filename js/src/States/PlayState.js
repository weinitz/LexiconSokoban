class PlayState extends GameState {
    constructor() {
        super(...arguments);
        this.name = "PlayState";
    }

    move(nextPosition, direction) {
        Game.getInstance().board.handleMove(nextPosition, direction);
        if (Game.getInstance().board.won()) {
            const state = new WonState();
            Game.getInstance().transitionTo(state);
        }
    }
}