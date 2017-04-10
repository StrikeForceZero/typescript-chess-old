/**
 *  From: https://github.com/Microsoft/TypeScript/issues/3192
 *
 *  Example:
 *
 *  const Color  = makeEnumFromList('Red', 'Green');
 *  type  Color  = EnumType<typeof Color>;
 */
export type EnumType<T> = T[keyof T];
export function makeEnumFromList<X extends string>(...x: X[]): {[K in X]: K } {
    const o: any = {};
    for (const k of x) {
        o[ k ] = k;
    }
    return o;
}
export function makeEnumFromObject<X, K extends string>(x: X): {[K in keyof X]: X[K] } {
    return x;
}