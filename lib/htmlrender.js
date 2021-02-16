const path = require('path');
const fs = require('fs');

const templateDir = path.resolve(__dirname, '../template');

const renderMain = (html) => {
  const template = fs.readFileSync(
    path.resolve(templateDir, 'indextemp.html'),
    'utf8'
  );
  return fillData(template, 'team', html);
};

const fillData = (template, placeholder, value) => {
  const pattern = new RegExp('{{ ' + placeholder + ' }}', 'gm');
  return template.replace(pattern, value);
};

const render = (groups) => {
  const html = [];

  html.push(
    groups
      .filter((group) => group.getRole() === 'Manager')
      .map((manager) => renderManager(manager))
  );
  html.push(
    groups
      .filter((group) => group.getRole() === 'Engineer')
      .map((engineer) => renderEngineer(engineer))
  );
  html.push(
    groups
      .filter((group) => group.getRole() === 'Intern')
      .map((intern) => renderIntern(intern))
  );
  return renderMain(html.join(''));
};

const renderManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templateDir, 'managertemp.html'),
    'utf8'
  );
  template = fillData(template, 'role', manager.getRole());
  template = fillData(template, 'name', manager.getName());
  template = fillData(template, 'id', manager.getId());
  template = fillData(template, 'email', manager.getEmail());
  template = fillData(template, 'officeNum', manager.getofficeNum());
  return template;
};

const renderEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templateDir, 'engineertemp.html'),
    'utf8'
  );
  template = fillData(template, 'role', engineer.getRole());
  template = fillData(template, 'name', engineer.getName());
  template = fillData(template, 'email', engineer.getEmail());
  template = fillData(template, 'id', engineer.getId());
  template = fillData(template, 'github', engineer.getGithub());
  return template;
};

const renderIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templateDir, 'interntemp.html'),
    'utf8'
  );
  template = fillData(template, 'role', intern.getRole());
  template = fillData(template, 'name', intern.getName());
  template = fillData(template, 'email', intern.getEmail());
  template = fillData(template, 'id', intern.getId());
  template = fillData(template, 'school', intern.getSchool());
  return template;
};



module.exports = render;
