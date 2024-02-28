// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const generateMarkdown = require('./utils')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A github username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address username:',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A github username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter Title:',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description:',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter Installation instructions: (please provide detailed steps)',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Installation structions are required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter Usage Information:',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Valid usage Information is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter Test instructions:'
    },
    {
        type: 'list',
        message: 'Choose your license for your project.',
        name: 'license',
        choices: [
            { value: 'MIT' },
            { value: 'Apache' },
            { value: 'LGPL' },
            { value: 'MPL' },
            { value: 'None' },
        ]
    },

]

// TODO: Create a function to write README file
function generateReadme() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        const filename = `${answers.github},md`;
        fs.writeFile(filename , markdownContent, (err) => err ? console.error(err) : console.log("Readme has been successfully generated"));
    });
}

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((answers) => {

//         const licenseBadge = "";
//         const readmeContent = writeToFile(answers, licenseBadge);

//         fs.writeFile('README.md', readmeContent, (err) => {
//             if (err) throw err;
//             console.log('README.md has been saved!');
//         });
//     });
// }

// Function call to initialize app
generateReadme()
