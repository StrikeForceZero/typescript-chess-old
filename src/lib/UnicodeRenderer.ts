import { EnumType, makeEnumFromObject } from '../utils/enum';
import Piece, { Color, Type } from './Piece';
import { AbstractRenderer } from './AbstractRenderer';

export const UnicodeCharIcon = makeEnumFromObject({
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

    WhiteSquare: '■',
    BlackSquare: '□',
});
export type UnicodeCharIcon = EnumType<typeof UnicodeCharIcon>;

export default class UnicodeRenderer extends AbstractRenderer {
    public renderPiece(piece: Piece) {
        return UnicodeCharIcon[ Color[ piece.Color ] + Type[ piece.Type ] ];
    }
    public renderSquare(color: Color) {
        return UnicodeCharIcon[ Color[ color ] + 'Square' ];
    }
}