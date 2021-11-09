class WonState extends GameState {
  name: string = "WonState";

  move(nextPosition: Position, direction): void {
    Game.getInstance().board.rootElement.textContent = "Grattis";
  }
}