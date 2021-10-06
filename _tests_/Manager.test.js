const Manager = require("../lib/Manager");

describe("managerTests", function () {
    it("getRole() should return same value as role", function () {
        const manager = new Manager("Anne", 4, "anne@sample.email");
        expect(manager.getRole()).toBe('Manager');
    });

    it("getOfficeNumber() should return same value as officeNumber", function () {
        const manager = new Manager("Anne", 4, "anne@sample.email", 25) ;
        expect(manager.getOfficeNumber()).toBe(25);
    });
});
