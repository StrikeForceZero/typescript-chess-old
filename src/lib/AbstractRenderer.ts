import Piece, { Color } from './Piece';

export interface IRenderer {
    renderPiece(piece: Piece): string;
    renderSquare(color: Color): string;
}

export abstract class AbstractRenderer implements IRenderer {
    public abstract renderPiece(piece: Piece): string;
    public abstract renderSquare(color: Color): string;
}

export default AbstractRenderer;