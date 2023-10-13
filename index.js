
const inquirer = require('inquirer');
const fs = require('fs');

const writeToFile = ({ title, description, installation, usage, contribution, test, links, github}) =>
 `# ${title}
  ## Description
  
  ${description}
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Contribution
  
  ${contribution}
  
  ## Test
  
  ${test}
  
  ## Links
  
  ${links}
  
  ## Github
  
  ${github}`;

inquirer
 .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your chosen title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is you description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your app?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the app?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How do would other contribute to the project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test the app?'
    }
 ])
  .then((answers) => {
    console.log(answers);
    const markdownPageContent = writeToFile(answers);

    fs.writeFile('madeReadMe.md', markdownPageContent, (err) => 
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


