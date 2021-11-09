abstract class Immovable extends Component implements IMoveStrategy {
    canMove() {
        return false;
    }
}