// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.'
    },
    {
        type: 'confirm',
        name: 'TOC',
        message: 'Would you like to include a table of contents?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Is there anyone you would like to include as a collaborator?'
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Do you want to include a license?',
        default: true
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What Liscense does this application have?',
        choices: ['Apache_2.0', 'GPLv3', 'MIT', 'ISC']
    },
    {
        type: 'confirm',
        name: 'contributors',
        message: 'Would you like to include a "Code of Conduct" section for contributors to this project(Contributor Covenant v2.1)?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you have any tests for this app? Provide examples of how to run them.'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter how to contact you about this application.'
    }

];


// TODO: Create a function to write README file
const writeToFile = pageMarkDown => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', pageMarkDown, err => {
            if (err) {
                reject(err);

                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)

    .then(data => {
        return generateMarkdown(data)
    })
    .then(pageMarkdown => {
        return writeToFile(pageMarkdown)
        
    }).catch(err => {
        console.log(err)
    })

}

// Function call to initialize app
init();
