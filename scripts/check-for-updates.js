var puppeteer = require('puppeteer'),
    chalk = require('chalk'),
    fs = require('fs');

var URLs = require('./updates-urls.js');

// For each URL, we can check multiple CSS selectors and compare if it's value
// is correct
async function checkWebsite(url, element, text) {
  console.log(chalk.blue('Testing "' + url + '" for text ' + text + ':'));

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const pageElement = await page.$x(element);

  if (pageElement === null) {
    console.log(chalk.red("Can't find element: " + element));
    // Uncomment this line to save HTML in a file and stop the script.
    fs.writeFile('./html-body.html', page.content(), function(err) {throw "Saved to a file!";});
  }

  // let textOfElement = await pageElement[0].textContent;
  let textOfElement = await page.evaluate(h1 => h1.textContent, pageElement[0]);

  if (textOfElement.trim() === text) {
    console.log(chalk.green('OK'));
  } else {
    // Something changed, report it
    console.log(chalk.red('Error in element: ' + element));
    console.log(chalk.red('Expected value: ' + text));
    console.log(chalk.red('Actual value: ' + textOfElement.trim()));
    console.log(chalk.red('Actual value before trim: ' + textOfElement));
  }

  await browser.close();
};


console.log(chalk.yellow('Testing if any information on the website requires updates'));

URLs.forEach(function(website) {
  website.targets.forEach(function(target, index){
    const url = website.url;
    const element = target.element;
    const value = target.value;

    checkWebsite(url, element, value);
  });
});

//     console.log(chalk.blue('Testing "' + website.url + '":'));

//     $ = cheerio.load(body);
//     website.targets.forEach(function(target, index){
//       var element = $(target.element);
//       console.log(chalk.blue('Checking: ' + index + '/' + website.targets.length));
//       if ($(element).length === 0) {
//         // Can't find the element on the page
//         console.log(chalk.red("Can't find element: " + target.element));
//         // Uncomment this line to save HTML in a file and stop the script.
//         fs.writeFile('./html-body.html', body, function(err) {throw "Saved to a file!";});
//       }
//       else if ($(element).text().trim() != target.value) {
//         // Something changed, report it
//         console.log(chalk.red('Error in element: ' + element));
//         console.log(chalk.red('Expected value: ' + target.value));
//         console.log(chalk.red('Actual value: ' + $(element).text().trim()));
//         console.log(chalk.red('Actual value before trim: ' + $(element).text()));
//         // Uncomment this line to save HTML in a file and stop the script.
//         // fs.writeFile('./html-body.html', body, function(err) {throw "Saved to a file!";});
//       } else {
//         console.log(chalk.green('OK'));
//       }
//     });
//   });
// });
