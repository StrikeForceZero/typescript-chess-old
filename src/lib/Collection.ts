export default class Collection<T> {
    protected readonly items: T[] = [];
    protected add(item: T): number {
        return this.items.push(item);
    }
    public get size(): number {
        return this.items.length;  
    }
    public get last(): T {
        return this.items.slice().pop();
    }
    public all(): T[] {
        return this.items;
    }
    public *[Symbol.iterator](): Iterable<T> {
        for(const item of this.items) {
            yield item;
        }
    }
}