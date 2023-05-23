// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('generateMarkdown.js')


// TODO: Create an array of questions for user input


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project Title?',
        validate: (value) => { if (value) { return true } else { return `Please name you project.` } },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
        validate: (value) => { if (value) { return true } else { return `Please write a description` } },
    },
    {
        type: 'input',
        name: 'toc',
        message: 'What is your table of contents? If none, say N/A',
        validate: (value) => { if (value) { return true } else { return `Please enter your table of contents, or N/A if you have none` } },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What did you do to install your project? What steps did you take?',
        validate: (value) => { if (value) { return true } else { return `Please explain a valid installation process and your steps` } },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: (value) => { if (value) { return true } else { return `Please include instructions and examples for use` } },
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please enter your screenshot file URL',
        validate: (value) => { if (value) { return true } else { return `Please enter a screenshot file URL` } },
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators. If none, enter N/A',
        validate: (value) => { if (value) { return true } else { return `Please enter collaborators or enter N/A if none apply` } },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please enter your license. If none, enter N/A',
       choices: ['MIT', "GPLv3", "AGPL"]
    },
    {
        type: 'input',
        name: 'badge',
        message: 'Please enter any badges you hold. If none, enter N/A',
        validate: (value) => { if (value) { return true } else { return `Please enter your badge, or enter N/A if not applicable` } },
    },
    {
        type: 'input',
        name: 'feature',
        message: 'Please enter any features your project has. If none, enter N/A',
        validate: (value) => { if (value) { return true } else { return `Please enter your project features, or enter N/A if not applicable` } },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If you would like other developers to contribute to your project, explain how they could do so. If not, enter N/A',
        validate: (value) => { if (value) { return true } else { return `Please enter any further project contributions for other developers to act on, or enter N/A if not applicable` } },
    },
    {
        type: 'input',
        name: 'test',
        message:'If you have written any tests for your project, please give type examples here.  If not, enter N/A',
        validate: (value) => { if (value) { return true } else { return `Please enter examples for anying testing that you have done, or enter N/A if not applicable` } },
    },

]
// generateReadme
function templateView(questions){
const draft = `
# Title
 ${questions.title}



## Description

${questions.description} 

## Table-of-Contents


     
*/
${questions.toc}

## Installation

${questions.installation}

## Usage

${questions.usage}

## Screenshot

${questions.screenshot}

## Credits

${questions.credits}

## License

${questionslicense}

## Badges

${questions.badges}

## Features

${questions.features}

## Contribution

${questions.contribution}

## Tests

${questions.tests}
`
return draft
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let answers = templateView(data)
    fs.writeFile(fileName, answers, (err) =>
    err ? console.log(err) : console.log("Success!"),)
};

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
