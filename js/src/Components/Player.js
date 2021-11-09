class Player extends Movable {
    constructor(position) {
        super(position);
        this.name = "Player";
    }

    canMoveTo(component) {
        return component.name === "Floor";
    }

    canMove() {
        return true;
    }
}