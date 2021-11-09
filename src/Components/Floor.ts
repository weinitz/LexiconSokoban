class Floor extends Immovable {
    name = "Floor";

    canMoveTo(component: Component): boolean {
        return true;
    }

    canMove(): boolean {
        return false;
    }
}