// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
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
        message: 'Enter Usage Information:'
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
        licenseChoice: ['Free' , 'full']
    },
]

// TODO: Create a function to write README file
function writeToFile(ReadMe, questions) {

 }

// TODO: Create a function to initialize app
function init() {
    
 }

// Function call to initialize app
init();
