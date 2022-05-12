
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
            name: "Title",
            message: "What is the name of your project?",
        },
        {
            type: "input",
            name: "Tasks",
            message: "Create a small description on your project: "
        },
        {
            type: "input",
            name: "User story",
            message: "What is the purpose of your project?"
        },
        {
            type: "input",
            name: "installations",
            message: "What have installed to create your project? ",
        },

        {
            type: "input",
            name: "Contributers",
            message: "Who contributed to complete your project?"
        },
        {
            type: "input",
            name: "Github",
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