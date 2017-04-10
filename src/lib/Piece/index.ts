import Position from '../Position';
import Board from '../Board';

export enum Type {
    Pawn,
    Knight,
    Bishop,
    Rook,
    Queen,
    King,
}

export enum Color {
    White,
    Black,
}

export type MovePart = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | -1 | -2 | -3 | -4 | -5 | -6 | -7 | -8;
export type Move = [ MovePart, MovePart ];
export type Moves = Array<Move>;

export default class Piece {

    protected readonly Moves: Moves;
    protected readonly MaxMoves: number = 0;

    protected get Attack(): Moves {
        return this.Moves;
    }

    constructor(public readonly Color: Color,
                public readonly Type: Type,
                public Position: Position,) {

    }

    public moveToPosition(board: Board, position: Position) {
        if(
            !this.getPossibleMoves(board).some(p => p.equals(position))
            &&
            !this.getPossibleCaptures(board).map(p => p.Position).some(p => p.equals(position))
        ){
            throw new Error('invalid move');
        }
        this.Position = position;
    }

    public getPossibleCaptures(board: Board): Piece[] {
        const possibleCaptures = [];
        for(const move of this.Attack) {
            let position = this.Position;
            for(let i=0; i < this.MaxMoves; i++) {
                const targetPiece = board.getPieceAtPosOffset(position, move);
                if(targetPiece) {
                    possibleCaptures.push(targetPiece);
                    break;
                }
                position = board.getPositionFromOffset(position, move);
            }
        }
        return possibleCaptures;
    }

    public getPossibleMoves(board: Board): Position[] {
        const possiblePositions = [];
        for(const move of this.Moves) {
            let position = this.Position;
            for(let i=0; i < this.MaxMoves; i++) {
                if(board.getPieceAtPosOffset(position, move)) {
                    break;
                }
                position = board.getPositionFromOffset(position, move);
                possiblePositions.push(position);
            }
        }
        return possiblePositions;
    }
}