// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input


const questions = [
    {
        type: 'input',
        name: 'user',
        message: "Enter your github user name"
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter title of your project'
    },
    {
        type: 'input',
        name: 'details',
        message: 'Enter any project details'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain installation process'
},
{
    type: 'input',
    name: 'benefits',
    message: 'Explain how your project can be beneficial to others'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose license used for project',
    options: ['MIT License', 'APACHE 2.0', 'None']
}
]




// TODO: Create a function to initialize app
function init() {
    fileName = 'README.md',
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data, "answers"),
        writeToFile(fileName, data)
    }
)
}

// Function call to initialize app
init();
