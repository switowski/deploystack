# Hacktoberfest

If you want to contribute to this repository as part of the hacktoberfest, the main problem is the outdated content. So feel free to update pricing or list of features on each sub-page.

# Deploystack

Deploystack is a curated list of tools and services that you might use when launching a website. It covers sections like hosting, domain names, web analytics (more will be added in the future). It contains recommendations of different companies/services that offer good value for money and are developer-friendly.

## But why?

Sometimes, you just want to create a website with cats and the only thing you need is hosting. Or you already have a website with cats and want to add some simple web analytics tool. You don't need Amazon AWS for that (don't get me wrong, AWS is awesome and it's highly appreciated by developers - [more than half of YC funded companies are using AWS](http://www.themacro.com/articles/2016/08/yc-tech-stacks/)), you just need one tool or service. So I created this list of different parts of deployment stack that can work together or separately.

## Usage

Just open [deploystack.io](https://deploystack.io) in your browser.


## Development:

To run the server locally:

```shell
# Install NPM dependencies
$ npm install

# Precompile SASS files, etc.
$ npm run build
# or watch folder for automatic SASS compilation:
$ npm run watch:css

# Start the app
$ node server.js

# Express server listening on port 3000
```

Debugging the .js scripts (there is probably a better way, but I'm not a JS programmer on a daily basis):

* Insert a breakpoint in the code: `debugger;`
* Run `node inspect <filename>`
* Type `c` to continue to the breakpoint
* Type `repl` to be able to inspect the code (otherwise, you will keep getting `foo is not defined` error all the time)
* Debug!

## Production:

Don't forget to set the environment variables on the production machine:

* `PORT` (to determine on which port the server will run)
* `CDN` (if not empty, this CDN URL will be prepended to all static resources)

## Contributing

Bug reports and feature requests are welcome, just [open an issue](https://github.com/switowski/deploystack/issues)

## License
Copyright (c) 2016 Sebastian Witowski.
Licensed under the MIT license.


