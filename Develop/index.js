// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input


const questions = [
    {
        type: 'input',
        name: 'github',
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
        name: 'description',
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
    choices: ['MIT License', 'APACHE 2.0', 'None']
},
{   
    type: 'input',
    name: 'contributions',
    message: 'enter contributions or collaborators if applicable'

},
 {   type:'input',
     name: 'testing',
     message: 'Enter testing steps used in project'
 }
]

/*
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
*/
// TODO: Create a function to initialize app

function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data),
        fs.writeFile('CreatedREADME.md', generateMarkDown(data), (err) => err? console.error(err) : console.log("it works!"))
    }
)
}

// Function call to initialize app
init();
