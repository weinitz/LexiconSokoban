class Game {
    constructor() {
        this.state = new InitialState();
    }

    static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }

    getCurrentPosition() {
        return this.board.getCurrentPlayerPosition();
    }

    move(nextPosition, direction) {
        this.state.move(nextPosition, direction);
    }

    transitionTo(state) {
        this.state = state;
    }
}

window.onload = () => {
    console.log("Game loaded");
    Game.getInstance();
};