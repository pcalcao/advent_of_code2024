import * as fs from 'fs';

export function loadStrings(filename: string): string[] {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return data.split('\n');
    } catch (error) {
        console.error('Error reading file:', error);
        return [];
    }
}
