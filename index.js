const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// inquirer.prompt(questions).then(answers => do stuff with them)
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'git_username',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
      },
      {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT','GPLv2','Apache License 2.0']
      },
      {
        type: 'input',
        message: 'What command should be run to install dependicies?',
        default: 'npm i',
        name: 'install',
      },
      {
        type: 'input',
        message: 'What command should be run to run tests?',
        default: 'npm test',
        name: 'command',
      },
      {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'repo',
      }


];

// function to write README file
function writeToFile(fileName, data) {
    //fs to writeFile or writeFileSync
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Generating your README file!!...');
      }); 
}

// function to initialize program
function init() {
 inquirer.prompt(questions).then(answers => {
    console.log(answers);
     
    // writeToFile within .then
    writeToFile('./utils/README.md', generateMarkdown(answers)) //return content of the readme
 })
    
}

// function call to initialize program
init();
