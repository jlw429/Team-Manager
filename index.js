//Manager,Engineer,Intern from the lib file (used for testing);
const Manager = require ('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');

//npm dependencies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

//output paths for final
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputDir = path.join(OUTPUT_DIR, 'index.html');
const render = require('./lib/htmlrender');

const team = [];

teamInput();

function teamInput() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Do you want to add a team engineer or a team intern?',
        name: 'employeeTitle',
        choices: ['manager', 'engineer', 'intern'],
      },
    ])
    .then((answers) => {
      switch (answers.managerChoice) {
        case 'manager':
          managerInput();
          break;
        case 'engineer':
          engineerInput();
          break;
        case 'intern':
          internInput();
          break;
      }
    });
}
function managerInput (){
    console.log('Hello! Ready to build your team?!');
    inquirer.prompt([
      {
        type: 'input',
        message: 'Please input your name:',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Please enter your Employee ID Number',
        name: 'id',
      },
      {
        type: 'input',
        message: 'please enter your employee email',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Please input your office number',
        name: 'officeNum',
      },
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNum
        );
        team.push(manager);
    });
};
function engineerInput() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please input your name:',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Please enter your Employee ID Number',
      name: 'id',
    },
    {
      type: 'input',
      message: 'please enter your employee email',
      name: 'email',
    },
    {
      type: 'input',
      message: 'please enter your github ID',
      name: 'github',
    },
  ])
  .then((answers) => {
    const engineer = new engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    team.push(engineer);
  });
};

 




