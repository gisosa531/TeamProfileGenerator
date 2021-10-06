const Engineer = require("../lib/Engineer");

describe("engineerTests", function () {
   
    it("getRole() should return same value as role", function () {
      const engineer = new Engineer("Bill", 2, "bill@sample.email");
      expect(engineer.getRole()).toBe('Engineer');
    });

    it("getGithub() should return same value as role", function () {
        const engineer = new Engineer("Bill", 2, "bill@sample.email", "github.com/billDozer");
        expect(engineer.getGithub()).toBe('github.com/billDozer');
      });
  });