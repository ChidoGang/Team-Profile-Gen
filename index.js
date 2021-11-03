const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const render = require("./lib/htmlRenderer")
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const intern = require("./lib/intern");
const path = ("path"); 

const teamArray = [];

const Manager =[
{
    type:'input',
    name:'name',
    message:'who is the manager of this team?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the manager's name"); 
            return false;
        }
    } 
},

{
    type:'input',
    name:'id',
    message:"Please enter the manager's ID.",
    validate: nameInput => {
        if (isNaN(nameInput)) {
        console.log("Please enter the manager's ID!")
        return false;
    } else {
        return true;
    }
    }

},

{
    type:'input',
    name:'email',
    message:"Please enter manager's email.",
    validate: email =>{
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
            return true;
        } else {
            console.log ('Please enter an email!')
            return false;
        }
    }

},

{

    type:'input',
    name:'officeNumber',
    message:"Please enter the manager's office number",
    validate: nameInput => {
        if (isNaN(nameInput)) {
            console.log ('Please enter an office number!')
            return false;
        } else {
            return true; 
        }
    }
}
]


const Engineer =[
{
    type:'list',
    name:'role',
    message:"Please choose your employee's role",
    choices: ['Engineer','Intern']

},

{
    type:'input',
    name:'ID',
    message:"Please enter the employee's ID! ",
},

{
    type:'input',
    name:'email',
    message:"please enter the employee's email",
}, 

{
    type:'input',
    name:'Office #',
    message:'What does the user need to know about using the repo?',

},

{
    type:'input',
    name:'GitHub',
    message:'What does the user need to know about contributing to the repo!',

}

]

const Intern =[
    {
        type:'list',
        name:'role',
        message:"Please choose your employee's role",
        choices: ['Engineer','Intern']
    
    },
    
    {
        type:'input',
        name:'ID',
        message:"Please enter the employee's ID! ",
    },
    
    {
        type:'input',
        name:'email',
        message:"please enter the employee's email",
    }, 
    
    {
        type:'input',
        name:'Office #',
        message:'What does the user need to know about using the repo?',
    
    },
    
    {
        type:'input',
        name:'GitHub',
        message:'What does the user need to know about contributing to the repo!',
    
    }
    
    ]

    const question = [
    {
        type: 'list',
        name: 'next employee',
        messages: 'Select the type of team member you would like to add',
        choices: ['Engineer', 'intern','done']
    
    }

]



function writeToFile(fileName, data) {
    fs.writeFile('newfile.html', render(teamArray), function (err) {
      if (err) {
        return console.log('File has been created successfully');
      }
    });
  }
    

init();

