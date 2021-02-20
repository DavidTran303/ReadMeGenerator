const inquirer = require("inquirer");
const fs = require("fs");
// const util = require('util')

// const writeFile = util.promisify(fs.writeFile)

function promptQuestion(){
inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project',
    },
    {
      type: 'input',
      name: 'Table of Content',
      message: '',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of your website?',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Which licenses do you prefer?',
      choices: [
      "MIT", 
      "GNU GPLv3", 
      "Apache", 
      "ISC" ]
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Who was contributed to your project?',
    },
    {
      type: 'input',
      name: 'tests ',
      message: 'What are the test questions for your application?',
    },
     {
      type: 'input',
      name: 'questions',
      message: 'What questions do you got for the users using your application?',
    },
    {
      type: 'input',
      name: 'GitHub',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ]).then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  
}
promptQuestion();

// async function init(){

// }
//     try{
//     const response = await promptQuestions();
//     const readMe = generateMarkdown(response);
// }

  
  
  
// function generateHashTag(reponse){
//     `#{reponse.title}

//     #Table of Content

//     -[Description](#description)
//     -[Installation](#installation)
//     -[Usage](#usage)
//     -[Contributing](#contributing)
//     -[Test](#test)
//     -[Credits](#license)
//     -[Questions](#questions)

//     #Description: 
//     ![License](INSERT LINK)

//     ${reponse.description}
//     ## Installation: 
//     ${reponse.installation}
//     ## Usage
//     ${reponse.usage}
//     ## Contributing
//     ${reponse.contribution}
//     ## Test
//     ${reponse.test}
//     ## Credit
//     ${reponse.credit}

// -[GitHub Profile](https://github.com/{$reponse.username})`
//  }
