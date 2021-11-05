const fs = require("fs");
const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const generateTeamprofileGenerator = require('./src/page-template')
const TeamprofileGeneratorArray = [];

const askManager = () => {
    inquirer.prompt([
{
    type:'input',
    name:'name',
    message:'who is the manager of this team?',
},

{
    type:'input',
    name:'id',
    message:"Please enter the manager's ID.",
 },

{
    type:'input',
    name:'email',
    message:"Please enter manager's email.",
},

{

    type:'input',
    name:'officeNumber',
    message:"Please enter the office number",
},

{
        type: 'list',
        name: 'role',
        messages: 'Select the type of team member you would like to add or done if your finished',
        choices: ['Engineer', 'intern','done'] 
}
]).then(function(data){
    let {name,id,email,officenumber,role,choice} = data

    TeamprofileGeneratorArray.push(data);

    if (choice === 'yes') {
        console.log('|n-------------------------------------------------------/n');
        askManager();
    }else {
        console.log('Generating Team Profile');
        writeToFile('./dist/index.html', generateTeamprofileGenerator(TeamprofileGeneratorArray));
    }
})
}  
function writeToFile(fileName,data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            console.log(err);
        }
    });
}

askManager();

