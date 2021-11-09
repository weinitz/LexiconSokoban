class Player extends Movable {
    constructor(position) {
        super(position);
        this.name = "Player";
        const movement = new Movement();
    }
    canMoveTo(component) {
        return component.name === "Floor";
    }
    canMove() {
        return true;
    }
}
