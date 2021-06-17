// todoapp to save notes using CLI

const fs = require('fs');
const yargs = require('yargs');
const argv = require('yargs/yargs')(process.argv.slice(2)).string(['title', 'body']).argv;
const args = process.argv.slice(2);

// console.log('argv = ', argv, '\nargs = ', args);


//------------------------------------------    FUNCTIONS   -----------------------------------------
function help() {
  console.log(fs.readFileSync(__dirname + '/manual.txt', 'utf8'));
}


//-------------------------------------------   CONTROL FLOW    -----------------------------------------
switch (args[0]) {
  case 'add':
    if (argv.title && argv.body) {
      console.log(argv.title, argv.body);
    }
    else {
      console.log('Invalid arguments. Refer the manual !!!\n');
      help();
    }
    break;

  case 'remove':
    if (argv.title) {
      console.log(argv.title);
    }
    else {
      console.log('Invalid arguments. Refer the manual !!!\n');
      help();
    }
    break;

  case 'list':
    console.log('show list');
    break;

  case 'read':
    if (argv.title) {
      console.log('show title and body of this');
    }
    else {
      console.log('Invalid arguments. Refer the manual !!!\n');
      help();
    }
    break;

  default:
    console.log('Invalid command. Refer the manual !!!\n');
    help();
    break;
}
