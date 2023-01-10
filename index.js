// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const genMarkdown = require("./Develop/utils/generateMarkdown");
const fs = require("fs");

console.log("working");


// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    name: "title",
    message: "What is your project title?"
    }, 
    {
    type: "input",
    name: "description",
    message: "Type description of project"
    }, 
    {
    type: "input",
    name: "installation",
    message: "How to install project"
    }, 
    {
    type: "input",
    name: "usage",
    message: "How to use project"
    }, 
    {
    type: "input",
    name: "contributing",
    message: "List collaborators (is any)" 
    }, 
    {
    type: "list",
    name: "license",
    message: "Select license", 
    choices: [
        "MIT",
        "Microsoft Public License",
        "Mozilla Public License 2.0"
        ]
    }, 
    {
    type: "input",
    name: "tests",
    message: "Provide a test (if any) and how to run it"
    }, 
    {
    type: "input",
    name: "questions",
    message: "What is your GitHub username?", 
    message: "What is you e-mail?"
    }];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {}



// Function call to initialize app
init();
