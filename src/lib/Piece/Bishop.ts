import Position from '../Position';
import Piece, { Color, Moves, Type } from './index';
export default class Bishop extends Piece {
    Moves: Moves = [
        [ 1, 1 ],
        [ -1, -1 ],
        [ 1, -1 ],
        [ -1, 1 ],
    ];
    MaxMoves     = 8;

    constructor(color: Color,
                Position: Position,) {
        super(color, Type.Bishop, Position);
    }
}