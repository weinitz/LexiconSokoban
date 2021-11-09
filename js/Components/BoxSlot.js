class BoxSlot extends Immovable {
    constructor() {
        super(...arguments);
        this.name = "BoxSlot";
    }

    canMoveTo(component) {
        return false;
    }

    canMove() {
        return false;
    }
}