class BoxSlot extends Immovable {
    name = "BoxSlot";

    canMoveTo(component: Component): boolean {
        return false;
    }

    canMove(): boolean {
        return false;
    }
}