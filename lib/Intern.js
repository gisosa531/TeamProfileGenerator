// Imports Employee constructor
const Employee = require("./Employee");

// Intern child constructor class extends from parent Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    //calls employee constructor properties and methods
    super(name, id, email);
    //school property added
    this.school = school;
  }

  // overrides empoyee role with intern
  getRole() {
    return "Intern";
  }

  // returns school from input
  getSchool() {
    return this.school;
  }
    
}
//modified class exported
module.exports = Intern;