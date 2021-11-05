const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
  
  describe("Engineer object instantiation", () => {
    it("Creates an object with name, id, email, and github properties", () => {
      const engineer = new Engineer("loan", 1, "loan@gmail.com", "loangit");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("loan");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("loan@gmail.com");
      expect(engineer.github).toEqual("loangit");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const engineer = new Engineer("loan", 1, "loan@gmail.com", "loangit");

      expect(engineer.getName()).toEqual("loan");
    });
  });

  
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const engineer = new Engineer("loan", 1, "loan@gmail.com", "loangit");

      expect(engineer.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const engineer = new Engineer("loan", 1, "loan@gmail.com", "loangit");

      expect(engineer.getEmail()).toEqual("loan@gmail.com");
    });
  });

 
  describe("getGithub", () => {
    it("Should return the object's github property", () => {
      const engineer = new Engineer("loan", 1, "loan@gmail.com", "loangit");

      expect(engineer.getGithub()).toEqual("loangit");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Engineer", () => {
      const engineer = new Engineer("loan", 1, "loan@gmail.com", "loangit");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});