import { Type, Color, getTypeCharFromType } from './Piece/index';
import Position from './Position';
export default class LogItem {
    public readonly SourceType: Type;
    public readonly SourceColor: Color;
    public readonly SourcePosition: Position;
    public readonly TargetPosition: Position;

    constructor(type: Type, color: Color, startPosition: Position, endPosition: Position) {
        this.SourceType = type;
        this.SourceColor = color;
        this.SourcePosition = startPosition;
        this.TargetPosition = endPosition;
    }

    toString() {
        return `${getTypeCharFromType(this.SourceType)}${this.TargetPosition.toString()}`;
    }
}