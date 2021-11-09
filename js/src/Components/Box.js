class Box extends Movable {
    constructor() {
        super(...arguments);
        this.name = "Box";
    }

    canMoveTo(component) {
        return component.name === "BoxSlot" || component.name === "Box" || component.name === "Floor";
    }
}