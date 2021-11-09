class Floor extends Immovable {
    constructor() {
        super(...arguments);
        this.name = "Floor";
    }

    canMoveTo(component) {
        return true;
    }

    canMove() {
        return false;
    }
}