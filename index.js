const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const generateHTML = require("./src/page.template")
const employeeData = []
function managerPrompt(){
    inquirer
        .prompt([
            {
               type: "input",
               name: "name" ,
               message: "What is the team manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?"
            },
            {
                type: "input",
                name: "office",
                message: "What is the office number?"
            },
        ]).then((answers)=>{
            const newMember = new Manager(answers.name,answers.id,answers.email,answers.office)
            employeeData.push(newMember)
            addOn()
        })

}

function engineerPrompt(){
    inquirer
        .prompt([
            {
               type: "input",
               name: "name" ,
               message: "What is the team engineer's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the employee's GitHub?"
            },
        ]).then((answers)=>{
            const newMember = new Engineer(answers.name,answers.id,answers.email,answers.github)
            employeeData.push(newMember)
            addOn()
        })

}

function internPrompt(){
    inquirer
        .prompt([
            {
               type: "input",
               name: "name" ,
               message: "What is the team intern's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?"
            },
            {
                type: "input",
                name: "school",
                message: "What school does the employee attend?"
            },
        ]).then((answers)=>{
            const newMember = new Intern(answers.name,answers.id,answers.email,answers.school)
            employeeData.push(newMember)
            addOn()
        })

}

function addOn(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "addOn",
                message: "Do you want to add another member?",
                choices: ["Engineer", "Intern", "Finished"]
            }
        ]).then((answers)=>{
            switch(answers.addOn){
                case "Engineer":
                    engineerPrompt()
                    break
                case "Intern":
                    internPrompt()
                    break
                default:
                    //team.html
                   const htmlData = generateHTML(employeeData)
                    console.log(htmlData);
                    
                    
            }
        })
}

managerPrompt()