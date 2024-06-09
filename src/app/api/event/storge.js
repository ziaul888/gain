import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'eventData.json');

export const readData = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

export const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};