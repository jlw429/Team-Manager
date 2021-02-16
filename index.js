//Manager,Engineer,Intern from the lib file (used for testing);
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//npm dependencies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

//output paths for final
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');
const render = require('./lib/htmlrender');

const team = [];

teamInput();

function teamInput() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Do you want to add a manager, engineer or a intern?',
        name: 'employeeTitle',
        choices: ['manager', 'engineer', 'intern'],
      },
    ])
    .then((answers) => {
      switch (answers.employeeTitle) {
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
function managerInput() {
  inquirer
    .prompt([
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
      addorDone();
    });
}
function engineerInput() {
  inquirer
    .prompt([
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
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
      addorDone();
    });
}
function internInput() {
  inquirer
    .prompt([
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
        message: 'please enter your current school',
        name: 'school',
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      addorDone();
    });
}

function addorDone() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Do you have more employees to add?',
        name: 'continueComplete',
        choices: ['yes', 'no'],
      },
    ])
    .then((answers) => {
      switch (answers.continueComplete) {
        case 'yes':
          teamInput();
          break;
        case 'no':
          outToRender();
          break;
      }
    });
}

function outToRender() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(team), 'utf-8');
}
