class Game {
    private state: GameState;
    private static instance: Game;
    board!: Board;

    private constructor() {
        this.state = new InitialState();
    }

    static getInstance(): Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }

    getCurrentPosition(): Position {
        return this.board.getCurrentPlayerPosition();
    }

    move(nextPosition: Position, direction): void {
        this.state.move(nextPosition, direction);
    }

    transitionTo(state: GameState): void {
        this.state = state;
    }
}

window.onload = () => {
    console.log("Game loaded");
    Game.getInstance();
};