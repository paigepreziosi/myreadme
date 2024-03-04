// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'What is your full name?',
    name: 'name',
},
{
    type: 'input',
    message: 'Please provide a description of your project.',
    name: 'description',
},
{
    type: 'input',
    message: 'Please provide a step-by-step description of how to install your project.',
    name: 'installation',
},
{
    type: 'input',
    message: 'Please provide a step-by-step description of how to use your project.',
    name: 'usage',
},
{
    type: 'input',
    message: 'Please provide a step-by-step description of how to contribute to your project.',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Please provide a step-by-step description of how to test your project.',
    name: 'test',
},
{
    type: 'input',
    message: 'What is your e-mail address?',
    name: 'email',
},
{
    type: 'input',
    message: 'What is your github username?',
    name: 'github',
},
{
    type: 'list',
    message: 'Please select a license.',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Your README.md file has been created!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    writeToFile('CreatedREADME', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
