// todoapp to save notes using CLI

const fs = require('fs');
const yargs = require('yargs');
const argv = require('yargs/yargs')(process.argv.slice(2)).string(['title', 'body']).argv;
const args = process.argv.slice(2);



/*------------------------------------------    FUNCTIONS   -----------------------------------------*/
function help() {
  console.log(fs.readFileSync(__dirname + '/manual.txt', 'utf8'));
}


function addNote(title, body) {
  fs.readFile('./notes.json', 'utf8', function (err, json_string) {
    if (err) {
      console.log('notes.json file read operation failed: ', err);
    }
    else {
      try {
        if (json_string.length) {
          var json_obj = JSON.parse(json_string);
          var duplicate_flag = false;

          for (let i = 0; i < json_obj.length; i++) {
            if (json_obj[i].title == title) {
              console.log('Duplicate title not allowed......choose another one');
              duplicate_flag = true;
            }
          }

          if (!duplicate_flag) {
            let data = { "title": title, "body": body };
            json_obj.push(data);
            let newdata = JSON.stringify(json_obj);
            fs.writeFile('./notes.json', newdata, (err) => {
              if (err)
                throw err;
              console.log("+ Note added");
            });
          }
        }
        else {  //if notes.json file is empty then
          let data = [{ "title": title, "body": body }];
          let newdata = JSON.stringify(data);
          fs.writeFile('./notes.json', newdata, (err) => {
            if (err)
              throw err;
            console.log("+ Note added");
          });
        }
      }
      catch (err) {
        console.log('Error parsing JSON string: ', err);
      }
    }
  });
}


function removeNote(title) {
  fs.readFile('./notes.json', 'utf8', function (err, json_string) {
    if (err) {
      console.log('notes.json file read operation failed: ', err);
    }
    else {
      try {
        var found = false;

        if (json_string.length) {
          var json_obj = JSON.parse(json_string);
          var table = [];
          for (let i = 0; i < json_obj.length; i++) {
            if (json_obj[i].title == title) {
              found = true;
              continue;
            }
            let data = { "title": json_obj[i].title, "body": json_obj[i].body };
            table.push(data);
          }
          if (found) {
            console.log("- Note removed ");
            var newdata = JSON.stringify(table);
            fs.writeFile('./notes.json', newdata, (err) => {
              if (err)
                throw err;
            });
          }
        }
        if (!found)
          console.log("Specified title not exist, please check all titles with list command .......");
      }
      catch (err) {
        console.log('Error parsing JSON string: ', err);
      }
    }
  });
}


function listNote() {
  fs.readFile('./notes.json', 'utf8', function (err, json_string) {
    if (err) {
      console.log('notes.json file read operation failed: ', err);
    }
    else {
      try {
        if (json_string.length) {
          var json_obj = JSON.parse(json_string);
          if (!json_obj.length)
            console.log("No notes were taken yet !!!");
          else
            for (let i = 0; i < json_obj.length; i++) {
              console.log((i + 1) + ". " + json_obj[i].title);
            }
        }
        else
          console.log("No notes were taken yet !!!");
      }
      catch (err) {
        console.log('Error parsing JSON string: ', err);
      }
    }
  });
}


function readNote(title) {
  fs.readFile('./notes.json', 'utf8', function (err, json_string) {
    if (err) {
      console.log('notes.json file read operation failed: ', err);
    }
    else {
      try {
        var found = false;

        if (json_string.length) {
          var json_obj = JSON.parse(json_string);
          for (let i = 0; i < json_obj.length; i++) {
            if (title == json_obj[i].title) {
              console.log("Title: " + json_obj[i].title);
              console.log("Body: " + json_obj[i].body);
              found = true;
            }
          }
        }

        if (!found) {
          console.log('Specified title not exist, please check all titles with list command .......');
        }
      }
      catch (err) {
        console.log('Error parsing JSON string: ', err);
      }
    }
  });
}



/*-------------------------------------------   CONTROL FLOW    -----------------------------------------*/
switch (args[0]) {
  case 'add':
    if (argv.title && argv.body) {
      addNote(argv.title, argv.body);
    }
    else {
      console.log('Invalid arguments. Refer the manual !!!\n');
      help();
    }
    break;

  case 'remove':
    if (argv.title) {
      removeNote(argv.title);
    }
    else {
      console.log('Invalid arguments. Refer the manual !!!\n');
      help();
    }
    break;

  case 'list':
    listNote();
    break;

  case 'read':
    if (argv.title) {
      readNote(argv.title);
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
