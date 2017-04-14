export enum XPos {
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    E = 5,
    F = 6,
    G = 7,
    H = 8,
}

export type YPos = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;


export default class Position {
    constructor(
        public readonly X: XPos,
        public readonly Y: YPos,
    ) {
        if(this.Y < 0 || this.Y > 8 || this.X < 0 || this.X > 8) {
            throw new Error('out out bounds');
        }
    }

    public equals(position: Position) {
        return this.Y === position.Y && this.X === position.X;
    }

    toString() {
        return `${XPos[this.X]}${this.Y}`;
    }
}