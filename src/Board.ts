class Board {
    rootElement = document.getElementById("board");
    private components: Component[][];

    constructor(components: Component[][]) {
        this.components = components;
    }

    getComponent(position: Position): Component {
        return this.components[position.row][position.column];
    }

    setComponent(position: Position, component: Component): void {
        component.position = new Position(position.row, position.column);
        this.components[position.row][position.column] = component;
    }

    getPlayer(): Player {
        for (let rowIndex = 0; rowIndex < this.components.length; rowIndex++) {
            const row = this.components[rowIndex];
            const player = row.find(e => e.name === "Player");
            if (player !== undefined) {
                console.log(player);
                return player;
            }
        }
        return new Player(new Position(0, 0));

    }

    getCurrentPlayerPosition(): Position {
        for (let rowIndex = 0; rowIndex < this.components.length; rowIndex++) {
            const row = this.components[rowIndex];
            const columnIndex = row.findIndex((tile) => {
                return tile.name === "Player";
            });
            if (columnIndex !== -1) {
                return new Position(rowIndex, columnIndex);
            }
        }
        return new Position(0, 0);
    }

    moveComponent(component: Component, nextPos: Position) {
        this.setComponent(component.position, new Floor(component.position));
        this.setComponent(nextPos, component);
        console.log(nextPos, component);
        this.render();
    }

    won(): boolean {
        return [].concat.apply([], this.components).find((component: { name: string; }) => component.name === "BoxSlot") === undefined;
    }

    handleMove(nextPos: Position, direction) {
        const player = this.getPlayer();
        const nextComponent = this.getComponent(nextPos);
        const nextComponentNextPos = Movement.nextPos(nextPos, direction);
        const nextComponentNext = this.getComponent(nextComponentNextPos);
    
        if (player.canMoveTo(nextComponent)) {
            console.log("player can move to");
            this.moveComponent(player, nextComponent.position);
        }
        else if (nextComponent.canMoveTo(nextComponentNext)) {

            this.moveComponent(nextComponent, nextComponentNextPos);
            this.moveComponent(player, nextPos);
        }
    }

    render() {
        this.rootElement?.textContent = "";
        this.components.forEach(row => {
            const rowElement = document.createElement("div");
            row.forEach(column => {
                const componentElement = document.createElement("div");
                componentElement.setAttribute("class", column.name);
                componentElement.textContent = column.name;
                rowElement.appendChild(componentElement);
            });
            this.rootElement?.appendChild(rowElement);
        });
    }

}