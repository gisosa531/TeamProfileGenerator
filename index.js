//Packages
// acquires file system 
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderPage = require("./src/page.js");

const 

function buildManagerProfile() {
    console.log("Time to build your team")
    inquirer.prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the name of the team manager?",
        },
        {
          type: "input",
          name: "managerIdentificationNumber",
          message: "What is the id of the manager?",
        },
        {
          type: "input",
          name: "managerEmailAddress",
          message: "What is the email address of the manager?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
        }
      ]).then(res => {
        const manager = new Manager(res.managerName, res.managerIdentificationNumber, res.managerEmailAddress, res.managerOfficeNumber);
       
      });
    }
  