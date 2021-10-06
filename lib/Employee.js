// Parent constructor class for Employee
class Employee {
  // properties and methods for parent class
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // returns name from input
  getName() {

    return this.name;
  }
  // returns id
  getId() {

    return this.id;
  }
  // returns email
  getEmail() {
    return this.email;
  }
  // returns employee type
  getRole() {
    return 'Employee';
  }

}
// class will be exported
module.exports = Employee;