import { EnumType, makeEnumFromObject } from '../utils/enum';
import Piece, { Color, Type } from './Piece';
export const AsciiPieceIcon = makeEnumFromObject({
    'WhiteKing':   '♔',
    'WhiteQueen':  '♕',
    'WhiteRook':   '♖',
    'WhiteBishop': '♗',
    'WhiteKnight': '♘',
    'WhitePawn':   '♙',
    'BlackKing':   '♚',
    'BlackQueen':  '♛',
    'BlackRook':   '♜',
    'BlackBishop': '♝',
    'BlackKnight': '♞',
    'BlackPawn':   '♟',
});

export type AsciiPieceIcon = EnumType<typeof AsciiPieceIcon>;

export class AsciiPiece extends Piece {
    get render() {
        return AsciiPiece.render(this);
    }
    public static render(piece: Piece) {
        return AsciiPieceIcon[ Color[ piece.Color ] + Type[ piece.Type ] ];
    }
}