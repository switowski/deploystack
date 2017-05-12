/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Best tools for launching your website - Deploystack',
    content: content
  });
};

exports.hosting = function(req, res) {
  res.render('hosting', {
    content: content['hosting']
  });
};


// Dictionary to store content for each section's card
var content = {
  'hosting': {
    'title': 'Hosting',
    'description': "Your website needs a home, preferably somewhere in the cloud. Check what options you have for different amount of monthly fee (starting from the free option).",
    'url': "/hosting",
    'icon': ''
  },
  'domain': {
    'title': 'Domain',
    'description': "Your website needs a URL, so people can visit it. Check how much different domains cost per year (the common ones like .com but also the unusual ones like .pizza).",
    'url': "/domain",
    'icon': ''
  },
  'ssl': {
    'title': 'SSL certificate',
    'description': "",
    'url': "",
    'icon': ''
  },
  '': {
    'title': '',
    'description': "",
    'url': "",
    'icon': ''
  },
  '': {
    'title': '',
    'description': "",
    'url': "",
    'icon': ''
  },
  '': {
    'title': '',
    'description': "",
    'url': "",
    'icon': ''
  },
  '': {
    'title': '',
    'description': "",
    'url': "",
    'icon': ''
  },
}








        +section-card('Domain',
          "Your website needs a URL, so people can visit it. Check how much different domains cost per year (the common ones like .com but also the unusual ones like .pizza).",
          "/domain",
          "")
        +section-card('SSL certificate',
          "If you don't want to be penalized by the search engines and you want your website to be more secured, you should get an SSL certificate (the basic ones are free!).",
          "/ssl",
          "")
        +section-card('Monitoring',
          "You don't need to worry if your website is still working when you sleep. There are automatic tools that will notify you when it's down or has some errors.",
          "/monitoring",
          "")
        +section-card('Web analytics',
          "See how users are interacting with your website. Check which browser or device is the most popular, what age are your visitors or how did they find your website",
          "/analytics",
          "")
        +section-card('Monitoring',
          "You don't need to worry if your website is still working when you sleep. There are automatic tools that will notify you when it's down or has some errors.",
          "/monitoring",
          "")