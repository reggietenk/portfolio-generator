const fs = require('fs');
const generatePage = require('./src/page-template')
const inquirer = require('inquirer');
    inquirer
        .prompt([
            //  questions here
        ])
        .then(answers => {
            // user feedback
        });

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
if (err) throw err;

console.log('Portfolio complete! Check out index.html to see the output!');
});
