
// Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./Utilise/Readme generatorfile")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Create a small description on your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "What did you have to install to complete your project if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the purpose of your project?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who were the contributors of this projects?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 

// Async function using util.promisify 
  async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to file
        await writeFileAsync('/Users/nealephilippe/Desktop/Homework week 9 Read me generator /Week-9-Read-Me-Generator/ReadMe.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  