class PlayState extends GameState {
  name: string = "PlayState";

  move(nextPosition: Position, direction): void {
    Game.getInstance().board.handleMove(nextPosition, direction);

    if(Game.getInstance().board.won()) {
       const state = new WonState();
       Game.getInstance().transitionTo(state);
    }
  }
}