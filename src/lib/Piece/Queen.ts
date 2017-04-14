import Position from '../Position';
import Piece, { TypeChar, Color, Moves, Type } from './index';
export default class Queen extends Piece {

    protected static TypeChar = TypeChar.Queen;

    Moves: Moves = [
        [ 1, 1 ],
        [ -1, -1 ],
        [ 1, -1 ],
        [ -1, 1 ],

        [ 1, 0 ],
        [ 0, 1 ],
        [ -1, 0 ],
        [ 0, -1 ],
    ];
    MaxMoves     = 8;

    constructor(color: Color,
                Position: Position,) {
        super(color, Type.Queen, Position);
    }
}