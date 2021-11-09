class Box extends Movable {
    name = "Box";

    canMoveTo(component: Component): boolean {
        return component.name === "BoxSlot" || component.name === "Box" || component.name === "Floor";
    }
}