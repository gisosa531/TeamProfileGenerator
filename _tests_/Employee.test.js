const Employee = require("../lib/Employee");

describe("employeeTests", function () {
  it("getName() should return same value as name", function () {
    const employee = new Employee("Bob", 1, "bob@sample.email");
    expect(employee.getName()).toBe("Bob");
  });

  it("getID() should return same value as ID", function () {
    const employee = new Employee("Bob", 1, "bob@sample.email");
    expect(employee.getId()).toBe(1);
  });

  it("getEmail() should return same value as email", function () {
    const employee = new Employee("Bob", 1, "bob@sample.email");
    expect(employee.getEmail()).toBe("bob@sample.email");
  });

  it("getRole() should return same value as role", function () {
    const employee = new Employee("Bob", 1, "bob@sample.email");
    expect(employee.getRole()).toBe('Employee');
  });
});
