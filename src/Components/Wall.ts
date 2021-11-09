class Wall extends Immovable {
    name = "Wall";

    canMoveTo(): boolean {
        return false;
    }

    canMove(): boolean {
        return false;
    }
}