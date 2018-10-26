var request = require('request'),
    cheerio = require('cheerio'),
    chalk = require('chalk'),
    fs = require('fs');

var URLs = require('./updates-urls.js');

console.log(chalk.yellow('Testing if any information on the website requires updates'));

// For each URL, we can check multiple CSS selectors and compare if it's value
// is correct
URLs.forEach(function(website) {
  var requestOptions = {
    url: website.url,
    headers: {
      // Need user agent for some websites (like 1&1)
      'User-Agent': 'request'
    }
  };
  request(requestOptions, function(err, resp, body){

    console.log(chalk.blue('Testing "' + website.url + '":'));

    $ = cheerio.load(body);
    website.targets.forEach(function(target, index){
      var element = $(target.element);
      console.log(chalk.blue('Checking: ' + index + '/' + website.targets.length));
      if ($(element).length === 0) {
        // Can't find the element on the page
        console.log(chalk.red("Can't find element: " + target.element));
        // Uncomment this line to save HTML in a file and stop the script.
        fs.writeFile('./html-body.html', body, function(err) {throw "Saved to a file!";});
      }
      else if ($(element).text().trim() != target.value) {
        // Something changed, report it
        console.log(chalk.red('Error in element: ' + element));
        console.log(chalk.red('Expected value: ' + target.value));
        console.log(chalk.red('Actual value: ' + $(element).text().trim()));
        console.log(chalk.red('Actual value before trim: ' + $(element).text()));
        // Uncomment this line to save HTML in a file and stop the script.
        // fs.writeFile('./html-body.html', body, function(err) {throw "Saved to a file!";});
      } else {
        console.log(chalk.green('OK'));
      }
    });
  });
});
