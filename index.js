// The packages needed for this application
const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");


// An array of questions for the user to input the information for the README file
const questions = [ {
    type: "input",
    name: "title",
    message: "What is your project title?"
    }, 
    {
    type: "input",
    name: "description",
    message: "Description of project?"
    }, 
    {
    type: "input",
    name: "installation",
    message: "How to install project?"
    }, 
    {
    type: "input",
    name: "usage",
    message: "How to use project?"
    },
    {
    type: "input",
    name: "screenshot",
    message: "Screenshot imagename from images folder?"
    }, 
    {
    type: "input",
    name: "contributing",
    message: "List collaborators (if any)?" 
    },  
    {
    type: "input",
    name: "tests",
    message: "Provide a test (if any) and how to run it?"
    }, 
    {
    type: "input",
    name: "gitHubUserName",
    message: "What is your GitHub username?"
    },
    {
    type: "input",
    name: "email",
    message: "What is your email?"
    },
    {
    type: "list",
    name: "license",
    message: "Select license", 
    choices: ["Apache", "MIT", "Mozilla_Public"],
        filter(info) {
            return info.toLowerCase();
        }
    }];

// A function to write the user input information into a README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("YEAH!");
    });
}

// A function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const markdown = genMarkdown.generateMarkdown(answers);
        writeToFile("README2.md", markdown);
        console.log(answers);
        return answers;
        });
    }

// Function call to initialize app
init();
