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

//Global Scope for team information to be pushed
const teamArray = [];

//function that starts
function start() {
//function that adds a manager profile data
  const addManagerProfile = () => {
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
    ])
    // Creates manager and pushes it to teamArray and runs teamChoice function
    .then(res => {
      const manager = new Manager(res.managerNAME, res.managerID, res.managerEMAIL, res.officeNumber);
      teamArray.push(manager);
      console.log(teamArray);
      teamChoice();
    });
  }

  //function that adds engineer data
  const setEngineer = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "engineerNAME",
        message: "What is the Name of your engineer?"
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the ID of your engineer?"
      },
      {
        type: "input",
        name: "engineerEMAIL",
        message: "What is the Email of your engineer?"
      },
      {
        type: "input",
        name: "engineerGITHUB",
        message: "What is the GitHub Username of your engineer?"
      },
    ])
    //creates engineer data and pushes it to teamArray and runs teamChoice function
      .then(res => {
        const engineer = new Engineer(res.engineerNAME, res.engineerID, res.engineerEMAIL, res.engineerGITHUB);
        teamArray.push(engineer);
        console.log(teamArray);
        teamChoice();

      })
  }

  //Function that adds intern data
  const setIntern = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "internNAME",
        message: "What is the Name of your intern?"
      },
      {
        type: "input",
        name: "internID",
        message: "What is the ID of your intern?"
      },
      {
        type: "input",
        name: "internEMAIL",
        message: "What is the Email of your intern?"
      },
      {
        type: "input",
        name: "internSCHOOL",
        message: "What is the School Name of your intern?"
      },
    ])
    // creates intern data and pushes it to teamArray and runs function teamChoice function
    .then(res => {
      const intern = new Intern(res.internNAME, res.internID, res.internEMAIL, res.internSCHOOL);
      teamArray.push(intern);
      console.log(`${res.internNAME} is now a member of the team!`);
      teamChoice();
    })
  }

  //Function that prompts user for adding either engineer or intern
  const teamChoice = () => {
    return inquirer.prompt([
      {
        type: "list",
        name: "employeeChoice",
        message: "Which sort of team member do you want to bring in?",
        choices: [
          "Engineer",
          "Intern",
          "I don't wish to expand my staff any further."
        ]
      }
    ])
      //Switch case for Choices 
      .then(res => {
        switch (res.employeeChoice) {
          case "Engineer":
            setEngineer();
            break;
          case "Intern":
            setIntern();
            break;
          default:
            buildPage();
        }
      })
  }

  //function that renders directory with the html profile containing the data selected
  const buildPage = () => {
    if (!fs.existsSync(VIEW_DIR)) {
      fs.mkdirSync(VIEW_DIR)
    }
    fs.writeFileSync(viewPath, renderPage(teamArray), "utf-8");
  }

  addManagerProfile()

}

start();