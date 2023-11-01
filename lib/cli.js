const inquirer = require('inquirer');
const { generateSVG } = require('./generateSVG');
const fs = require('fs');

class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter text for the logo. (Must not be more than 3 letters.)',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter a text color',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Select a shape for the logo',
                    choices: ['circle', 'triangle', 'square'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter a shape color',
                },
            ])
            .then((answers) => {
                const svgContent = generateSVG(answers);
                fs.writeFile('logo.svg', svgContent, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Generated logo.svg');
                    }
                });
            });
    }
}

module.exports = CLI;
