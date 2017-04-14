import Position from '../Position';
import Piece, { TypeChar, Color, Moves, Type } from './index';
export default class Rook extends Piece {

    protected static TypeChar = TypeChar.Rook;

    Moves: Moves = [
        [ 1, 0 ],
        [ 0, 1 ],
        [ -1, 0 ],
        [ 0, -1 ],
    ];
    MaxMoves     = 8;

    constructor(color: Color,
                Position: Position,) {
        super(color, Type.Rook, Position);
    }
}