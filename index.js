// Packages needed for this application 

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
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
        name: 'install',
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
        type: 'input',
        name: 'contributors',
        message: 'Enter names of Contributors:'
    },
    {
        type: 'input',
        name: 'deploy',
        message: 'Where is this application deployed:',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Valid usage Information is required.");
            }
            return true;
        }
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

//  function to write README file
function generateReadme() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        // const filename = `${answers.github},md`;
        const filename = "ReadMe.md"
        fs.writeFile(filename , markdownContent, (err) => err ? console.error(err) : console.log("Readme has been successfully generated"));
    });
}

// Function call to initialize app
generateReadme()
