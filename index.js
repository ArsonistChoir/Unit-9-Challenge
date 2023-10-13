
const inquirer = require('inquirer');
const fs = require('fs');

const writeToFile = ({ title, description, installation, usage, contribution, test, links, github, license }) => {

    let licenseBadge = "";

    if (license === 'None') {
        licenseBadge = "";
    } else if (license === "MIT") {
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache") {
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "Creative Commons") {
        licenseBadge = " [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    };

    return `${licenseBadge}
    
# ${title}

  ## Table of Content

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contribution](#contribution)

  [Test](#test)

  [Links](#links)

  [Github](#github)

  [License](#license)

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
  
  ${github}
  
  ## License
  
  ${license}`
};


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
        },
        {
            type: 'input',
            name: 'links',
            message: 'What the link for your project?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What your github account link?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like?',
            choices: ['MIT', 'Apache', 'Creative Commons', 'None']
        }
    ])
    .then((answers) => {
        console.log(answers);
        const markdownPageContent = writeToFile(answers);

        fs.writeFile('madeReadMe.md', markdownPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });


