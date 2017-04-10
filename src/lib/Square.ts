import Position from './Position';

export enum SquareColor {
    White = 0,
    Black = 1,
}

export default class Square {
    constructor(
        public readonly Color: SquareColor,
        public readonly Position: Position,
    ) {

    }
}