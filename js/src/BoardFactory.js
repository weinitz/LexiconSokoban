class BoardFactory {
    static createComponent(position, type) {
        switch (type) {
        case "w":
            return new Wall(position);
        case "p":
            return new Player(position);
        case "b":
            return new Box(position);
        case "s":
            return new BoxSlot(position);
        case "f":
        default:
            return new Floor(position);
        }
    }

    static createBoard() {
        const levels = {
            0: [
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
                ["w", "f", "f", "f", "f", "p", "f", "f", "f", "w"],
                ["w", "f", "f", "s", "b", "f", "f", "f", "f", "w"],
                ["w", "f", "f", "f", "f", "f", "f", "f", "f", "w"],
                ["w", "w", "w", "w", "f", "f", "f", "f", "f", "w"],
                ["w", "w", "w", "w", "f", "f", "f", "f", "f", "w"],
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
            ],
        };
        const initGrid = levels[0];
        var grid = Array();
        initGrid.forEach((row, rowIndex) => {
            grid.push(row.slice(0));
            row.forEach((tileString, columnIndex) => {
                if (tileString) {
                    const test = BoardFactory.createComponent(new Position(rowIndex, columnIndex), tileString);
                    console.log(test);
                    if (test !== null) {
                        grid[rowIndex][columnIndex] = test;
                    }
                }
            });
        });
        return new Board(grid);
    }
}