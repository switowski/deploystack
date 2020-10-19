# Deploystack

Deploystack is a curated list of tools and services that you might use when launching a website. It covers sections like hosting, domain names, web analytics (more will be added in the future). It contains recommendations of different companies/services that offer good value for money and are developer-friendly.

## But why?

Sometimes, you just want to create a website with cats and the only thing you need is hosting. Or you already have a website with cats and want to add some simple web analytics tool. You don't need Amazon AWS for that (don't get me wrong, AWS is awesome and it's highly appreciated by developers - [more than half of YC funded companies are using AWS](http://www.themacro.com/articles/2016/08/yc-tech-stacks/)), you just need one tool or service. So I created this list of different parts of deployment stack that can work together or separately.

## Usage

Just open [deploystack.io](https://switowski.github.io/deploystack) in your browser.

## Development

To run the server locally:

```shell
# Install dependencies
$ bundle install

# Optional: Install NPM dev packages and precompile SASS files, etc.
$ npm install
$ npm run build
# Or watch folder for automatic SASS compilation:
$ npm run watch:css

# Start the app
$ bundle exec jekyll serve
```

## License

Copyright (c) 2016 Sebastian Witowski.
Licensed under the MIT license.
