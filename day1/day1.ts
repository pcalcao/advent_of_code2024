import { loadStrings } from '../utils';

export function parseString(str: string): [number, number] {
    const [a, b] = str.split(/\s+/);
    return [parseInt(a), parseInt(b)];
}

export function parseStrings(strings: string[]): [number[], number[]] {
    const parsed = strings.map(parseString);
    return [parsed.map(p => p[0]).sort(), parsed.map(p => p[1]).sort()];
}

export function calculateDiffs([arr1, arr2]: [number[], number[]]): number {
    return arr1.reduce((acc, curr, idx) => 
        acc + Math.abs(curr - arr2[idx]), 0);
}

export function mapOfOccurences(arr2: number[]): Map<number, number> {
    const occurences = new Map<number, number>();
    arr2.forEach(v => occurences.set(v, (occurences.get(v) || 0) + 1));
    return occurences;
}

export function calculateValues([arr1, arr2]: [number[], number[]]): number {
    const occurences = mapOfOccurences(arr2);
    return arr1.reduce((acc, curr) => acc + curr *(occurences.get(curr) ?? 0), 0);
}

const strings = loadStrings('input');

console.log(calculateDiffs(parseStrings(strings)));
console.log(calculateValues(parseStrings(strings)));
