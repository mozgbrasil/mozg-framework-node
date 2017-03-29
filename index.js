/**
 * Copyright © 2017 Mozg. All rights reserved.
 * See LICENSE.txt for license details.
 */

//

console.log(this);

//

console.log('\x1b[46m%s\x1b[0m', '### https://www.npmjs.com/package/chalk');

var chalk = require('chalk');
console.log(chalk.blue('Hello world!'));

//

console.log(chalk.blue('### https://www.npmjs.com/package/commander'));

var program = require('commander');
 
program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);
 
console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);

//

console.log(chalk.blue('-'));
console.log('Iniciando o express');
console.log('Acesse http://localhost:3000/');
console.log(chalk.blue('-'));

console.log(chalk.blue('### https://www.npmjs.com/package/express'));

var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000, function () {
	console.log(chalk.blue('Express app listening on port 3000!'));
})

//

console.log(chalk.blue('### package/local'));

var mozg_framework = require('./src/index');
module['exports'] = mozg_framework;

console.log(mozg_framework);

//