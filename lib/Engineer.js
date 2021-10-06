// Imports Employee constructor
const Employee = require("./Employee");

// Engineer child constructor class extends from parent Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    //calls employee constructor properties and methods
    super(name, id, email);
    //github property added
    this.github = github;
  }

  // overrides empoyee role with engineer
  getRole() {
    return "Engineer";
  }
  // returns github from input
  getGithub() {
    return this.github;
  }

}
// modifed class exported
module.exports = Engineer;