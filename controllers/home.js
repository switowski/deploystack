/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Best tools for launching your website - Deploystack'
  });
};

exports.hosting = function(req, res) {
  res.render('hosting', {
    title: 'Best hosting options for your website',
    header: 'Hosting'
  });
};
