const Intern = require("../lib/Intern");

describe("internTests", function () {
   
    it("getRole() should return same value as role", function () {
      const intern = new Intern("Joe", 3, "joe@sample.email");
      expect(intern.getRole()).toBe('Intern');
    });

    it("getSchool() should return same value as school", function () {
        const intern = new Intern("Joe", 3, "joe@sample.email", "UCSD");
        expect(intern.getSchool()).toBe('UCSD');
      });
  });