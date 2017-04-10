import Position from '../Position';
import Piece, { Color, Moves, Type } from './index';
export default class Knight extends Piece {
    Moves: Moves = [
        [ 1, 3 ],
        [ 3, 1 ],
        [ -1, -3 ],
        [ -3, -1 ],

        [ 1, -3 ],
        [ 3, -1 ],
        [ -1, 3 ],
        [ -3, 1 ],
    ];
    MaxMoves     = 1;

    constructor(color: Color,
                Position: Position,) {
        super(color, Type.Bishop, Position);
    }
}