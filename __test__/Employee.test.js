
const Employee = require("../lib/Employee");

test("initiate Employee", () => {
    const e = new Employee("toto","34456","github@gmail"); 

    expect (e.name).toBe("toto");

    expect (e.email).toBe("github@gmail")

    expect (e.id).toBe("34456")

    
})

test("test Functions", () => {
    const e = new Employee("toto","34456","github@gmail"); 

    expect (e.getName()).toEqual("toto"); 

    expect (e.getId()).toEqual("34456")

    expect (e.getEmail()).toEqual("github@gmail")
    
    expect (e.getrole()).toEqual("Employee")
})