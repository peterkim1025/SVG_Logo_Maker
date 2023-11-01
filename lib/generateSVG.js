class SVG {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeElement(shape) {
        this.shapeElement = shape;
    }
}

function generateSVG(answers) {
    const canvas = new SVG();

    const shape = createShape(answers.shape, answers.shapeColor);

    canvas.setShapeElement(shape);

    const text = answers.text.substring(0, 3);
    canvas.setTextElement(text, answers.textColor);

    return canvas.render();
}

function createShape(shapeType, shapeColor) {
    switch (shapeType) {
        case 'circle':
            return `<circle cx="150" cy="100" r="100" fill="${shapeColor}" />`;
        case 'triangle':
            return `<polygon points="150,0 100,200 200,200" fill="${shapeColor}" />`;
        case 'square':
            return `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`;
        default:
            return '';
    }
}

module.exports = { generateSVG };
