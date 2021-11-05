const Employee = require("../lib/Employee");


describe("Employee", () => {
  
 
  describe("Employee object instantiation", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee("loan", 1, "loan@gmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("loan");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("loan@gmail.com");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const employee = new Employee("loan", 1, "loan@gmail.com");

      expect(employee.getName()).toEqual("loan");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const employee = new Employee("loan", 1, "loan@gmail.com");

      expect(employee.getID()).toEqual(1);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const employee = new Employee("loan", 1, "loan@gmail.com");

      expect(employee.getEmail()).toEqual("loan@gmail.com");
    });
  });


  describe("getRole", () => {
    it("Should return the string 'Employee'", () => {
      const employee = new Employee("loan", 1, "loan@gmail.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});