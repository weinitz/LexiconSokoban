class InitialState extends GameState {
    constructor() {
        super();
        this.name = 'InitialState';
        const rootElement = document.getElementById("sokoban");
        const startGameButton = document.createElement("button");
        startGameButton.textContent = "Start Game";
        startGameButton.onclick = this.start;
        rootElement === null || rootElement === void 0 ? void 0 : rootElement.appendChild(startGameButton);
        const boardElement = document.createElement("div");
        boardElement.setAttribute("id", "board");
        rootElement === null || rootElement === void 0 ? void 0 : rootElement.appendChild(boardElement);
    }
    start(e) {
        e.preventDefault();
        Game.getInstance().board = BoardFactory.createBoard();
        Game.getInstance().transitionTo(new PlayState);
        Game.getInstance().board.render();
    }
}
