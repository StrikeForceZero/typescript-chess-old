import { EnumType, makeEnumFromObject } from '../utils/enum';
import Piece, { Color, Type } from './Piece';
export const UnicodePieceIcon = makeEnumFromObject({
    WhiteKing:   '♚',
    WhiteQueen:  '♛',
    WhiteRook:   '♜',
    WhiteBishop: '♝',
    WhiteKnight: '♞',
    WhitePawn:   '♟',
    BlackKing:   '♔',
    BlackQueen:  '♕',
    BlackRook:   '♖',
    BlackBishop: '♗',
    BlackKnight: '♘',
    BlackPawn:   '♙',
});

export type UnicodePieceIcon = EnumType<typeof UnicodePieceIcon>;

export class UnicodePiece extends Piece {
    get render() {
        return UnicodePiece.render(this);
    }
    public static render(piece: Piece) {
        return UnicodePieceIcon[ Color[ piece.Color ] + Type[ piece.Type ] ];
    }
}