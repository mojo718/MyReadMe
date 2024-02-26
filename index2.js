//Psuedo code and Test JS


const fs = require('fs');
const inquirer = require('inquirer');

// Questions to prompt the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter Title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description:'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Enter Table of Contents:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter Installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter Usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter Contributing guidelines:'
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
        choices: ['free', 'full']
    }
];

// Function to generate the README content
function generateREADME(answers) {
    let readmeContent = `# README

## Description
${answers.description}

## Table of Contents
${answers.tableOfContents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

`;

    // Add badge and license notice based on user choice
    const badge = (answers.license === 'free') ? 'Free License Badge' : 'Full License Badge';
    const licenseNotice = (answers.license === 'free') ? 'This application is covered under the Free License.' : 'This application is covered under the Full License.';

    readmeContent += `## License
![${badge}](link-to-badge)

${licenseNotice}`;

    return readmeContent;
}

// Prompt user with questions
inquirer.prompt(questions)
    .then(answers => {
        // Generate README content based on user input
        const readmeContent = generateREADME(answers);

        // Write content to README.md file
        fs.writeFile('README.md', readmeContent, err => {
            if (err) {
                console.error(err);
            } else {
                console.log('README.md file has been generated successfully!');
            }
        });
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
