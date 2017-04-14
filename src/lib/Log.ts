import LogItem from './LogItem';
import Collection from './Collection';
import { Color } from './Piece/index';

export type LogItemTuple = [LogItem, LogItem];

export default class Log extends Collection<LogItemTuple> {
    public add(item: LogItem | LogItemTuple) {
        if(Array.isArray(item)) {
            const [whiteMove, blackMove] = item;
            if(whiteMove.SourceColor !== Color.White || blackMove.SourceColor !== Color.Black){
                throw new Error('invalid log item, must be white then black');
            }
            return this.items.push(item);
        }
        switch(item.SourceColor) {
            case Color.White:
                return this.items.push([item, undefined]);
            case Color.Black:
                return this.items.push([this.items.pop()[Color.White], item]);
            default:
                throw new Error('no color specified');
        }

    }
    toString() {
        return this.items.map(x => x.join(' ')).join('\n');
    }
}