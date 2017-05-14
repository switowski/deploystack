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
    title: 'Best hosting options for your website - Deploystack',
    content: content.hosting
  });
};


// Dictionary to store content for each section's card
var content = {
  'hosting': {
    'name': 'Hosting',
    'description': "Your website needs a home, preferably somewhere in the cloud. Check what options you have for different amount of monthly fee (starting from the free option).",
    'url': "/hosting",
    'icon': ''
  },
  'domain': {
    'name': 'Domain',
    'description': "Your website needs a URL, so people can visit it. Check how much different domains cost (the common ones like .com but also the unusual ones like .pizza).",
    'url': "/domain",
    'icon': ''
  },
  'ssl': {
    'name': 'SSL certificate',
    'description': "If you don't want to be penalized by the search engines and you want your website to be more secured, you should get an SSL certificate (the basic ones are free!).",
    'url': "/ssl",
    'icon': ''
  },
  'monitoring': {
    'name': 'Monitoring',
    'description': "You don't need to worry if your website is still working when you sleep. There are automatic tools that will notify you when it's down or has some errors.",
    'url': "/monitoring",
    'icon': ''
  },
  'analytics': {
    'name': 'Web analytics',
    'description': "See how users are interacting with your website. Check which browser or device is the most popular, what age are your visitors or how did they find your website.",
    'url': "/analytics",
    'icon': ''
  },
  'files': {
    'name': 'Files storage',
    'description': "Most websites contains not only the text and simple icons, but also images, videos and files to download. Check how you can cheaply store them in the cloud.",
    'url': "/files",
    'icon': ''
  },
  'cdn': {
    'name': 'CDN',
    'description': "To speed up loading of your page, you can use a CDN to store all the files in different servers around the world and serve them faster to your users.",
    'url': "/cdn",
    'icon': ''
  },
};
