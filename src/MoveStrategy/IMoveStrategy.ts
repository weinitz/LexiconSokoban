interface IMoveStrategy {
    canMove(): boolean;
    canMoveTo(component: Component): boolean;
}