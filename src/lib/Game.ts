import Board from './Board';
import Position from './Position';
export default class Game {
    public readonly Board = new Board();
    public move() {
        this.Board.movePieceToPos(new Position(1,7), new Position(1,6));
        this.Board.display();
        this.Board.movePieceToPos(new Position(1,6), new Position(1,5));
        this.Board.display();
        this.Board.movePieceToPos(new Position(1,5), new Position(1,4));
        this.Board.display();
        this.Board.movePieceToPos(new Position(1,4), new Position(1,3));
        this.Board.display();
        this.Board.movePieceToPos(new Position(1,3), new Position(2,2));
        this.Board.display();
    }
}