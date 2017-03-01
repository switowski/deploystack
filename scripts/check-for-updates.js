var request = require('request'),
    cheerio = require('cheerio'),
    chalk = require('chalk');

var URLs = require('./updates-urls.js');

console.log(chalk.yellow('Testing if any information on the website requires updates'));

// For each URL, we can check multiple CSS selectors and compare if it's value
// is correct
URLs.forEach(function(website) {
  request(website.url, function(err, resp, body){

    console.log(chalk.blue('Testing "' + website.url + '":'));

    $ = cheerio.load(body);
    website.targets.forEach(function(target, index){
      var element = $(target.element);
      console.log(chalk.blue('Checking: ' + index + '/' + website.targets.length));
      if ($(element).text() != target.value) {
        // Something changed, report it
        console.log(chalk.red('Error in element: ' + element));
        console.log(chalk.red('Expected value: ' + target.value));
        console.log(chalk.red('Actual value: ' + $(element).text()));
      } else {
        console.log(chalk.green('OK'));
      }
    });
  });
});
