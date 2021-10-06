//Imports Employee constructor
const Employee = require("./Employee");

//Manager child constructor class extends from parent Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //calls employee constructor properties and methods
    super(name, id, email);
    //office number property added
    this.officeNumber = officeNumber;
  }
  // overrides employee role with Intern
  getRole() {
    return "Manager";
  }

  // returns OfficeNumber
  getOfficeNumber() {
    return this.officeNumber;
  }

}
//modified class exported
module.exports = Manager;