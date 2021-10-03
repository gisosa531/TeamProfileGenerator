//Packages
// Acquires file system  and inquirer packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

//Accessing subclasses 
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//Access Template
const renderPage = require("./src/js/page.js");

//Normalizing paths
const VIEW_DIR = path.resolve(__dirname, "src/view")
const viewPath = path.join(VIEW_DIR, "profile.html");
// console.log(VIEW_DIR)
// console.log(viewPath)

//Global Scope 
const teamArray = [];

function addManagerProfile() {
  console.log("Time to build your Dream Team!")
  return inquirer.prompt([
    {
      type: "input",
      name: "managerNAME",
      message: "What is the Name of the team manager?",
    },
    {
      type: "input",
      name: "managerID",
      message: "What is the Id of the manager?",
    },
    {
      type: "input",
      name: "managerEMAIL",
      message: "What is the Email address of the manager?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's Office Number?",
    }
  ]).then(res => {
    const manager = new Manager(res.managerNAME, res.managerID, res.managerEMAIL, res.officeNumber);
    teamArray.push(manager);
    console.log(teamArray);
  
  });
}

addManagerProfile()