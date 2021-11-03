const Intern = require("../lib/Intern");

test("initiate Intern", () => {
    const e = new Intern("toto","34456","github@gmail","Rutgers"); 
    
    expect (e.school).toBe("Rutgers")

    expect (e.name).toBe("toto");

    expect (e.email).toBe("github@gmail")

    expect (e.id).toBe("34456")

    
})

test("test Functions", () => {
    const e = new Intern("toto","34456","github@gmail","Rutgers");

    expect (e.getschool()).toEqual("Rutgers"); 
    
    expect (e.getRole()).toEqual("Intern")
})