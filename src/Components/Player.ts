class Player extends Movable {
    name = "Player";

    constructor(position: Position) {
        super(position);
        const movement = new Movement();
    }

    canMoveTo(component: Component): boolean {
        return component.name === "Floor";
    }

    canMove(): boolean {
        return true;
    }
}