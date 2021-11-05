const Manager = require("../lib/Manager");


describe("Manager", () => {
  
  
  describe("Manager object instantiation", () => {
    it("Creates an object with name, id, email, and officeNumber properties", () => {
      const manager = new Manager("loan", 1, "loan@gmail.com", 45);

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("loan");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("loan@gmail.com");
      expect(manager.officeNumber).toEqual(45);
    });
  });

  describe("getName", () => {
    it("Should return the object's name property", () => {
      const manager = new Manager("loan", 1, "loan@gmail.com", 45);

      expect(manager.getName()).toEqual("loan");
    });
  });

  describe("getId", () => {
    it("Should return the object's id property", () => {
      const manager = new Manager("loan", 1, "loan@gmail.com", 45);

      expect(manager.getID()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const manager = new Manager("loan", 1, "loan@gmail.com", 45);

      expect(manager.getEmail()).toEqual("loan@gmail.com");
    });
  });
  
  describe("getOffice", () => {
    it("Should return the object's officeNumber property", () => {
      const manager = new Manager("loan", 1, "loan@gmail.com", 45);

      expect(manager.getOffice()).toEqual(45);
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
      const manager = new Manager("loan", 1, "loan@gmail.com", 45);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});

