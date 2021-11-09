class Board {
    constructor(components) {
        this.rootElement = document.getElementById("board");
        this.components = components;
    }
    getComponent(position) {
        return this.components[position.row][position.column];
    }
    setComponent(position, component) {
        component.position = new Position(position.row, position.column);
        this.components[position.row][position.column] = component;
    }
    getPlayer() {
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
    getCurrentPlayerPosition() {
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
    moveComponent(component, nextPos) {
        this.setComponent(component.position, new Floor(component.position));
        this.setComponent(nextPos, component);
        console.log(nextPos, component);
        this.render();
    }
    won() {
        return [].concat.apply([], this.components).find((component) => component.name === "BoxSlot") === undefined;
    }
    handleMove(nextPos, direction) {
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
        var _a;
        (_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.textContent = "";
        this.components.forEach(row => {
            var _a;
            const rowElement = document.createElement("div");
            row.forEach(column => {
                const componentElement = document.createElement("div");
                componentElement.setAttribute("class", column.name);
                componentElement.textContent = column.name;
                rowElement.appendChild(componentElement);
            });
            (_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.appendChild(rowElement);
        });
    }
}
