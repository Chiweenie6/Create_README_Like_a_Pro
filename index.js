// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");


console.log(genMarkdown);
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
    choices: ["Apache_License", "MIT", "Mozilla_Public_License"],
        filter(info) {
            return info.toLowerCase();
        }
    }];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("YEAH!");
    });
}



// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const markdown = genMarkdown.generateMarkdown(answers);

        writeToFile("README.md", markdown);

        // fs.writeFile("README.md", markdown, (err) =>
        //     err ? console.log(err): console.log("YAY!")
        // );
        console.log(answers);
        return answers;
        });
    }


// Function call to initialize app
init();
