const Engineer = require("../lib/Engineer");

test("initiate Engineer", () => {
    const e = new Engineer("toto","34456","github@gmail","Githubuser456"); 
    
    expect (e.github).toBe("Githubuser456")

    expect (e.name).toBe("toto");

    expect (e.email).toBe("github@gmail")

    expect (e.id).toBe("34456")

    
})

test("test Functions", () => {
    const e = new Engineer("toto","34456","github@gmail","Githubuser456");

    expect (e.getGithub()).toEqual("Githubuser456"); 
    
    expect (e.getrole()).toEqual("Engineer")
})