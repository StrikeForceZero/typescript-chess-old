import Position from '../Position';
import Piece, { Color, Moves, Type } from './index';
export default class Pawn extends Piece {
    Moves: Moves = [
        [ this.Color === Color.White ? 1 : -1, 0 ],
    ];

    MaxMoves = 1;

    get Attack(): Moves {
        return [
            [ this.Color === Color.White ? 1 : -1, -1 ],
            [ this.Color === Color.White ? 1 : -1, 1 ],
        ]
    };

    constructor(color: Color,
                Position: Position,) {
        super(color, Type.Pawn, Position);
    }
}