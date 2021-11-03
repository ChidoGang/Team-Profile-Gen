const Manager = require("../lib/Manager");

test("initiate Manager", () => {
    const e = new Manager("toto","34456","github@gmail","45"); 
    
    expect (e.office).toBe("45")

    expect (e.name).toBe("toto");

    expect (e.email).toBe("github@gmail")

    expect (e.id).toBe("34456")

    
})

test("test Functions", () => {
    const e = new Manager("toto","34456","github@gmail","45");

    expect (e.getofficeNumber()).toEqual("45")
    
    expect (e.getRole()).toEqual("Manager")
})