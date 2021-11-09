abstract class Component {
    abstract name: string;
    position: Position;

    constructor(position: Position) {
        this.position = position;
    }

    abstract canMove(): boolean;

    abstract canMoveTo(component: Component): boolean;

}