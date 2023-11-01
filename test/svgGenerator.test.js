const {generateSVG} = require('../lib/generateSVG');

describe('generateSVGTest1', () =>{
    test('should generate a new circle shape', () =>{
        const answers = {
            text: 'ABC',
            textColor: 'red',
            shape: 'circle',
            shapeColor: 'blue',
        };
        const expectedShape = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="100" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>`;
        const shape = generateSVG(answers);
        expect(shape).toEqual(expectedShape);
    });
});

describe('generateSVGTest2', () =>{
    test('should generate a new square shape', () =>{
        const answers = {
            text: 'ABC',
            textColor: 'purple',
            shape: 'square',
            shapeColor: 'pink',
        };
        const expectedShape = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" y="50" width="200" height="200" fill="pink" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">ABC</text></svg>`;
        const shape = generateSVG(answers);
        expect(shape).toEqual(expectedShape);
    });
});

