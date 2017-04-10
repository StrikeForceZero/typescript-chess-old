import Square, { SquareColor } from './Square';
import Position, { XPos, YPos } from './Position';
import Piece, { Color, Move, Type } from './Piece';
import { AsciiPiece } from './AsciiPiece';
import Bishop from './Piece/Bishop';
import Knight from './Piece/Knight';
import Queen from './Piece/Queen';
import Rook from './Piece/Rook';
import King from './Piece/King';
import Pawn from './Piece/Pawn';

export type BoardRow<T extends Square | Piece> = {1: T, 2: T, 3: T, 4: T, 5: T, 6: T, 7: T, 8: T};
export type BoardMatrix<T extends Square | Piece> = {1: BoardRow<T>, 2: BoardRow<T>, 3: BoardRow<T>, 4: BoardRow<T>, 5: BoardRow<T>, 6: BoardRow<T>, 7: BoardRow<T>, 8: BoardRow<T>};

function generateMatrix<T extends Square | Piece>(getItem: (x: XPos, y: YPos) => T): BoardMatrix<T> {
    const board = {} as BoardMatrix<T>;
    for(let y: YPos = 8; y >= 1; y--) {
        const column = board[y] = {} as BoardRow<T>;
        for(let x: XPos = 1; x <= 8; x++) {
             column[x] = getItem(x as XPos, y as YPos);
        }
    }
    return board;
}

const squareColorMap = [] as [string, string];
squareColorMap[SquareColor.White] = '■';
squareColorMap[SquareColor.Black] = '□';

export default class Board {
    private readonly Squares = generateMatrix<Square>((x, y) => {
        const modPos = x % 2 + y % 2;
        const isBlack: SquareColor = Number(modPos !== 0 && modPos !== 2);
        return new Square(isBlack, new Position(x as XPos, y as YPos));
    });
    private readonly Pieces = generateMatrix<Piece>((x, y) => {
        let color;
        let type;

        const typeMap = {};
        typeMap[XPos.A] = Type.Rook;
        typeMap[XPos.B] = Type.Knight;
        typeMap[XPos.C] = Type.Bishop;
        typeMap[XPos.D] = Type.Queen;
        typeMap[XPos.E] = Type.King;
        typeMap[XPos.F] = Type.Bishop;
        typeMap[XPos.G] = Type.Knight;
        typeMap[XPos.H] = Type.Rook;

        switch(y) {
            case 8:
                color = Color.Black;
                type = typeMap[x];
                break;
             case 7:
                color = Color.Black;
                type = Type.Pawn;
                 break;
            case 2:
                color = Color.White;
                type = Type.Pawn;
                break;
            case 1:
                color = Color.White;
                type = typeMap[x];
                break;
            default:
                return null;
        }

        switch (type) {
            case Type.Rook:
                return new Rook(color, new Position(x as XPos, y as YPos));
            case Type.Knight:
                return new Knight(color, new Position(x as XPos, y as YPos));
            case Type.Bishop:
                return new Bishop(color, new Position(x as XPos, y as YPos));
            case Type.Queen:
                return new Queen(color, new Position(x as XPos, y as YPos));
            case Type.King:
                return new King(color, new Position(x as XPos, y as YPos));
            case Type.Pawn:
                return new Pawn(color, new Position(x as XPos, y as YPos));
            default:
                throw new Error(`unknown type: ${type}`);
        }
    });
    private readonly CapturedPieced: Piece[] = [];

    public display() {
        for(const [ypos, column] of Object.entries(this.Squares)) {
            for(const [xpos, square] of Object.entries(column)) {
                const piece = this.Pieces[ypos][xpos];
                if(piece) {
                    process.stdout.write(AsciiPiece.render(piece));
                    continue;
                }
                process.stdout.write(squareColorMap[ square.Color ]);
            }
            process.stdout.write('\n')
        }
    }

    public getPieceAtPos(position: Position): Piece {
        return this.Pieces[position.Y][position.X];
    }

    public getPositionFromOffset(position: Position, [offsetY, offsetX]: Move): Position {
        return new Position(position.X + offsetX, position.Y + offsetY as YPos);
    }

    public getPieceAtPosOffset(position: Position, offset: Move): Piece {
        const { Y, X } = this.getPositionFromOffset(position, offset);
        return this.Pieces[Y][X];
    }

    public movePieceToPos(startPosition: Position, targetPosition: Position) {

        const piece = this.getPieceAtPos(startPosition);
        const targetPiece = this.getPieceAtPos(targetPosition);

        console.log(`moving ${Color[piece.Color]} ${Type[piece.Type]} from ${XPos[piece.Position.X]}${piece.Position.Y} -> ${XPos[targetPosition.X]}${targetPosition.Y}`);

        if(targetPiece) {
            if (targetPiece.Color === piece.Color) {
                throw new Error(`can't capture own piece`);
            }
            if (targetPiece.Color !== piece.Color) {
                console.log(`capturing: ${Color[targetPiece.Color]} ${Type[targetPiece.Type]}`);
                this.CapturedPieced.push(targetPiece);
            }
        }
        const oldPos = piece.Position;
        piece.moveToPosition(this, targetPosition);
        this.Pieces[oldPos.Y][oldPos.X] = null;
        this.Pieces[targetPosition.Y][targetPosition.X] = piece;
    }
}