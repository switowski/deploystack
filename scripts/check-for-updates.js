var puppeteer = require('puppeteer'),
    chalk = require('chalk'),
    fs = require('fs');

var URLs = require('./updates-urls.js');

// For each URL, we can check multiple CSS selectors and compare if it's value is correct
async function checkWebsites(){
  // Using for loops we can make the function wait for each async code to finish before the next iteration
  // https://stackoverflow.com/questions/46293216/crawling-multiple-url-in-a-loop-using-puppeteer
  for (let i = 0; i < URLs.length; i++) {
    const website = URLs[i];
    for (let j = 0; j < website.targets.length; j++) {
      const element = website.targets[j].element;
      const text = website.targets[j].value;

      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(website.url);

      const pageElements = await page.$x(element);

      console.log(chalk.blue('Testing "' + website.url + '" for text ' + text + ':'));

      if (pageElements.length == 0) {
        console.log(chalk.red("Can't find element: " + element));
        // Uncomment this line to save HTML in a file and stop the script.
        const html = await page.content();
        fs.writeFile('./html-body.html', html, function(err) {
          console.log(chalk.red("Saved HTML to 'html-body.html' file!"));
        });

        await browser.close();
      } else {
        let textOfElement = await page.evaluate(el => el.textContent, pageElements[0]);

        if (textOfElement.trim() === text) {
          console.log(chalk.green('OK'));
        } else {
          // Something changed, report it
          console.log(chalk.red('Error in element:' + element));
          console.log(chalk.red('Expected value:' + text));
          console.log(chalk.red('Actual   value:' + textOfElement.trim()));
          console.log(chalk.red('Actual value before trim:' + textOfElement));
        }

        await browser.close();
      }
    }
  }
}

console.log(chalk.yellow('Testing if any information on the website requires updates'));
checkWebsites();
