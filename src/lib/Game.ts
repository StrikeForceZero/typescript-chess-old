import Board from './Board';
import Position, { XPos } from './Position';
import Log from './Log';
import LogItem from './LogItem';
import { Color, Type } from './Piece/index';

export default class Game {
    public readonly Log = new Log();
    public readonly Board = new Board(this.Log);
    public move(sourcePosition: Position, targetPosition: Position) {
        const piece = this.Board.getPieceAtPosition(sourcePosition);
        console.log(`moving ${Color[piece.Color]} ${Type[piece.Type]} from ${XPos[piece.Position.X]}${piece.Position.Y} -> ${XPos[targetPosition.X]}${targetPosition.Y}`);
        this.Board.movePiece(piece, targetPosition);
        this.Log.add(new LogItem(piece.Type, piece.Color, sourcePosition, targetPosition));
        // console.log(JSON.stringify(this.Log.all(), null, 2));
    }
}