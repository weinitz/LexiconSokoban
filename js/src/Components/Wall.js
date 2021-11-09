class Wall extends Immovable {
    constructor() {
        super(...arguments);
        this.name = "Wall";
    }

    canMoveTo() {
        return false;
    }

    canMove() {
        return false;
    }
}