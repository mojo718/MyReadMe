// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer')



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
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
        message: 'Enter Installation instructions:'
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
        name: 'tests',
        message: 'Enter Test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['Free', 'full']
    },
]

// TODO: Create a function to write README file
function writeToFile(answers, licenseBadge) {
    return `
    #README
    ${answers.title}

    ${licenseBadge}

    ## Description

    ${answers.description}

    ## Table of Contents
    - [License](#license)
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation 
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    ${answers.license === 'free' ? 'This application is covered under the Free License.' : 'This application is covered under a Full License.'}

    ## Contributing
    ${answers.contributing}

    ## Tests
    ${answers.contributing}
     `
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      
        const licenseBadge = ""; 
        const readmeContent = writeToFile(answers, licenseBadge);
        
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) throw err;
            console.log('README.md has been saved!');
        });
    });
}


   



// Function call to initialize app
init();
