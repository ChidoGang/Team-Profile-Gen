const Intern = require("../lib/Intern");


describe("Intern", () => {
  
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("loan", 1, "loan@gmail.com", "University of rutgers");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("loan");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("loan@gmail.com");
      expect(intern.school).toEqual("University of rutgers");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const intern = new Intern("loan", 1, "loan@gmail.com", "University of rutgers");

      expect(intern.getName()).toEqual("loan");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const intern = new Intern("loan", 1, "loan@gmail.com", "University of rutgers");

      expect(intern.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const intern = new Intern("loan", 1, "loan@gmail.com", "University of rutgers");

      expect(intern.getEmail()).toEqual("loan@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return the object's school property", () => {
      const intern = new Intern("loan", 1, "loan@gmail.com", "University of rutgers");

      expect(intern.getSchool()).toEqual("University of rutgers");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Intern", () => {
      const intern = new Intern("loan", 1, "loan@gmail.com", "University of rutgers");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});