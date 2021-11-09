class InitialState extends GameState {
  name: string = 'InitialState';
  constructor() {
    super();
    const rootElement = document.getElementById("sokoban");
    const startGameButton = document.createElement("button");
    startGameButton.textContent = "Start Game";
    startGameButton.onclick = this.start;
    rootElement?.appendChild(startGameButton);
    const boardElement = document.createElement("div");
    boardElement.setAttribute("id", "board");
    rootElement?.appendChild(boardElement);
  }

  start(e: Event) {
    e.preventDefault();
    Game.getInstance().board = BoardFactory.createBoard();
    Game.getInstance().transitionTo(new PlayState);
    Game.getInstance().board.render();

  }
}